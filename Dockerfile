FROM node:stable
WORKDIR /workspace
ADD . .
CMD [ "executable" ]