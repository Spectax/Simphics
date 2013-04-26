Simphics
========

*A Simple JavaScript Game Engine*

Current Version: 0.2

##Description
Simphics is a Game Engine written in Javascript written for fun as a hobby.
You may use it as you wish under the MIT license (Open Source).

##Modules
The following modules are under development
###Single Player Game Engine - To run in a Web Browser
###Multiplayer Game Engine - To run on NodeJS
###Physics Engine
###Math Engine

##Miscellaneous Information

Simphics ideally should simplify stuff.

The simphics single player game engine should be able to replicate many of the standard game engine features such as game loop and game state.
Being written in javascript it should be able to run in a browser, and using HTML and CSS, games should be easy to design.

There will be a generic simphics_game.js that will contain the main game engine logic.
Then the simphics_single_web.js would wrap around that, to execute in the web.

There will be simphics_multiplayer_client.js and simphics_multiplayer_server.js for multiplayer capability using node.js as the server

simphics_physics.js and simphics_math.js are generic, but tailored to integrate well into the simphics game engine

##License

Copyright (C) 2013 Sai Teja Jammalamadaka

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
