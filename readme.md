API for image resizing
This is a backend project for the fullstack javascript Udacity Nanodegree.

In total there are four images and each resized image should be written to the assets/thumb folder of this project. Image names are bridge, building, mountains, and river. Each image is in jpg format.

Endpoints
The /api endpoint checks that routes can be connected to. The api/image route is the end point used for entering an image name, its width and height as query params. Be sure not to use the image extensions. Example: /image?file=building&width=200&height=200

App functionality
This project runs on localhost:3000. Dependencies in this app are prettier, lint, and jasmine. 'Npm run' may be used for both prettier and lint; while jasmine uses npm run test. This script will also create a build that converts typescript into javascript. You may use npm run start to connect with nodemon, and node build/. to test the app's build.
