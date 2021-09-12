# Image-Processing-API-
API for image resizing
_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
                  • This is a backend project for the fullstack javascript Udacity Nanodegree •
                                      Node.js| Express| Typescript| Jasmine

OVERVIEW
===============
In total there are four images. Each image should be resized by designating the image name, width, and height in the url. Each resized image should be written to the assets/thumb folder of this project. Image names are bridge, building, mountains, and river. Each image is in jpg format. To resize a photo please use the example link below. 

Example: api/image?file=building&width=200&height=200

Endpoints
------------
The /api endpoint checks that routes can be connected to. The api/image route is the end point used for entering an image name, its width and height as query params. Be sure not to use the image extensions.

App functionality
------------
This project runs on localhost:3000. Dependencies in this app are prettier, lint, and jasmine. 'Npm run' may be used for both the 'prettier' and 'lint' scripts; while jasmine uses the command npm run test. The 'test' script will also create a build that converts typescript into javascript. Npm run start is used to connect with nodemon, and node build/. to test the app's build.

_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
