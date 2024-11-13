# ChatGPT Print Bookmarklet

## Installation

Create a new bookmark with the following URL:
```
javascript:(function()%7Bif(window.PRINTER_FRIENDLY)%7Bdocument.querySelector(%22div%5Brole%3Dpresentation%5D%22).classList.add(%22flex%22)%3Bdocument.querySelectorAll(%22html%20*.overflow-hidden-off%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-hidden-off%22)%3Bnode.classList.add(%22overflow-hidden%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.overflow-auto-off%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-auto-off%22)%3Bnode.classList.add(%22overflow-auto%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.absolute-off%22).forEach(function(node)%7Bnode.classList.remove(%22absolute-off%22)%3Bnode.classList.add(%22absolute%22)%7D)%3Bwindow.PRINTER_FRIENDLY%3Dnull%7Delse%7Bdocument.querySelectorAll(%22html%20*.overflow-hidden%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-hidden%22)%3Bnode.classList.add(%22overflow-hidden-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.overflow-auto%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-auto%22)%3Bnode.classList.add(%22overflow-auto-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.absolute%22).forEach(function(node)%7Bnode.classList.remove(%22absolute%22)%3Bnode.classList.add(%22absolute-off%22)%7D)%3Bdocument.querySelector(%22div%5Brole%3Dpresentation%5D%22).classList.remove(%22flex%22)%3Bwindow.PRINTER_FRIENDLY%3Dtrue%7D%7D)()%3B%0A
```

## Development Setup

```console
# install NodeJs
asdf install nodejs 14.19.3

# install Node modules
npm install
```

## Building

```console
./build.sh
```
