# ChatGPT Print Bookmarklet

## Installation

Create a new bookmark with the following URL:
```
javascript:(function()%7Bdocument.querySelectorAll(%22html%20*.overflow-hidden%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-hidden%22)%3Bnode.classList.add(%22overflow-hidden-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.absolute%22).forEach(function(node)%7Bnode.classList.remove(%22absolute%22)%3Bnode.classList.add(%22absolute-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.overflow-hidden-off%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-hidden-off%22)%3Bnode.classList.add(%22overflow-hidden%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.absolute-off%22).forEach(function(node)%7Bnode.classList.remove(%22absolute-off%22)%3Bnode.classList.add(%22absolute%22)%7D)%7D)()%3B%0A
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
