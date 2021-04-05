#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install mc
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
npm i imgbb-uploader
npm i 
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "🍁 INSTALAÇÃO COMPLETA, AGORA DIGITE "node index.js" PARA OBTER O CÓDIGO QR❤️🍁"
