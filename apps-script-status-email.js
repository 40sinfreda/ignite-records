/**
 * Add to BOTH TOP 100 US and TOP 100 TRANCE Apps Script projects.
 * Then: Triggers → Add trigger → onEditStatusEmail → From spreadsheet → On edit
 *
 * When you change Status column (I) to "approved" or "rejected",
 * the artist receives an email automatically.
 */
function onEditStatusEmail(e) {
  try {
    if (!e || !e.range) return;
    var range = e.range;
    var sheet = range.getSheet();
    // Status is column 9 (I)
    if (range.getColumn() !== 9) return;
    if (range.getRow() < 2) return;

    var status = String(range.getValue() || "").toLowerCase().trim();
    if (status !== "approved" && status !== "rejected" && status !== "declined") return;

    var row = range.getRow();
    var data = sheet.getRange(row, 1, 1, 9).getValues()[0];
    var fullname = data[2];
    var stagename = data[3];
    var email = String(data[4] || "").trim();
    var trackurl = data[5];
    var formName = data[1] || "playlist";

    if (!email || email.indexOf("@") < 0) {
      Logger.log("No valid email on row " + row);
      return;
    }

    var playlistLabel = "Ignite Records playlist";
    if (String(formName).toLowerCase().indexOf("trance") >= 0) playlistLabel = "Global Trance Hits";
    else if (String(formName).toLowerCase().indexOf("billboard") >= 0 || String(formName).toLowerCase().indexOf("us") >= 0) playlistLabel = "TOP 100 US";
    else if (String(formName).toLowerCase().indexOf("galgalatz") >= 0) playlistLabel = "Galgalatz Live";

    var subject, body;
    if (status === "approved") {
      subject = "Your track was approved — " + playlistLabel;
      body =
        "Hi " + (stagename || fullname || "artist") + ",\\n\\n" +
        "Great news — your submission was approved for " + playlistLabel + ".\\n" +
        "Track: " + (trackurl || "") + "\\n\\n" +
        "It will be mixed into the playlist on the next weekly refresh (every 5th slot).\\n\\n" +
        "Please keep the playlist saved and listen to a few tracks at least once a month.\\n\\n" +
        "— Ignite Records\\n" +
        "https://igniterecords26.com/";
    } else {
      subject = "Update on your submission — " + playlistLabel;
      body =
        "Hi " + (stagename || fullname || "artist") + ",\\n\\n" +
        "Thank you for submitting to " + playlistLabel + ".\\n" +
        "After review, we are not able to include this track in the playlist at this time.\\n\\n" +
        "You are welcome to submit another track in the future.\\n\\n" +
        "— Ignite Records\\n" +
        "https://igniterecords26.com/";
    }

    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: body
    });
    Logger.log("Email sent to " + email + " status=" + status);
  } catch (err) {
    Logger.log("onEditStatusEmail error: " + err);
  }
}
