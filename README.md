# ModernPostit
Modern Postit Electron

![Modern Post-It](https://github.com/roqueribeiro/ModernPostit/blob/master/images/demo.gif?raw=true)

## How To Run Application

``` bash
# git clone
git clone https://github.com/roqueribeiro/ModernPostit.git

# enter in directory
cd ModernPostit

# install dependencies
npm install

# start application
npm install -g electron

npm start

# build .exe
npm install -g electron-packager

electron-packager ./ ModernPostit --platform=win32 --arch=x64 --icon=./favicon.ico --out=release-builds --overwrite --asar=true --prune=true
