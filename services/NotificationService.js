class NotificationService {
  show(title, body) {
    console.log(`Notification: ${title} - ${body}`);
  }
}
export default new NotificationService();
