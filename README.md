# ChatGPT Print Bookmarklet

## Installation

Create a new bookmark with the following URL:
```
javascript:(function()%7Bif(window.PF)%7Bdocument.querySelector(%22div%5Brole%3Dpresentation%5D%22).classList.add(%22flex%22)%3Bdocument.querySelectorAll(%22html%20*.overflow-hidden-off%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-hidden-off%22)%3Bnode.classList.add(%22overflow-hidden%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.overflow-auto-off%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-auto-off%22)%3Bnode.classList.add(%22overflow-auto%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.absolute-off%22).forEach(function(node)%7Bnode.classList.remove(%22absolute-off%22)%3Bnode.classList.add(%22absolute%22)%7D)%3Bdocument.getElementById(%22pf-styles%22).remove()%3Bwindow.PF%3Dnull%7Delse%7Bdocument.querySelectorAll(%22html%20*.overflow-hidden%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-hidden%22)%3Bnode.classList.add(%22overflow-hidden-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.overflow-auto%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-auto%22)%3Bnode.classList.add(%22overflow-auto-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.absolute%22).forEach(function(node)%7Bnode.classList.remove(%22absolute%22)%3Bnode.classList.add(%22absolute-off%22)%7D)%3Bdocument.querySelector(%22div%5Brole%3Dpresentation%5D%22).classList.remove(%22flex%22)%3Blet%20styleElement%3Ddocument.createElement(%22style%22)%3BstyleElement.id%3D%22pf-styles%22%3Bdocument.head.appendChild(styleElement)%3BstyleElement.sheet.insertRule(%22article%20%3E%20div%20%7Bpadding%3A%200px%20!important%3B%7D%22%2C0)%3BstyleElement.sheet.insertRule(%22*%20%7B%20font-size%3A%2012px%3B%20line-height%3A%201.3%3B%20margin%3A%200px%20!important%3B%7D%22%2C0)%3Bwindow.PF%3Dtrue%7D%7D)()%3B%0A
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
