# notification-thing
A simple demo of Expo notification handling
## How to build on your own
- Run `npm install`
- Remove the old EAS project ID from app.json
- Run `eas init`
- Run `eas build --profile development --platform android`
- Run `npx expo start` to run in the development build.
## Testing
I wanted to focused on notifications selected from the background/ app closed state behavior. I tried the following things and they worked
### development build
- [x] notification received in foreground
- [x] notification selected from background
- [x] notofication selected when app is shut down (starts app, goes to dev client browser interface, you open the app URL, and the selected notification appears)
### preview build (standalone APK)
- [x] notification received in foreground
- [x] notification selected from background
- [x] notofication selected when app is shut down (starts app and the selected notification appears)
