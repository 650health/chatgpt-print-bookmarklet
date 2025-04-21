# ChatGPT Print Bookmarklet

## Installation

Create a new bookmark with the following URL:
```
javascript:(function()%7Bif(window.PF)%7Bdocument.querySelector(%22div%5Brole%3Dpresentation%5D%22).classList.add(%22flex%22)%3Bdocument.querySelectorAll(%22html%20*.overflow-hidden-off%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-hidden-off%22)%3Bnode.classList.add(%22overflow-hidden%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.overflow-auto-off%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-auto-off%22)%3Bnode.classList.add(%22overflow-auto%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.tableContainer-off%22).forEach(function(node)%7Bnode.classList.remove(%22tableContainer-off%22)%3Bnode.classList.add(%22tableContainer%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.absolute-off%22).forEach(function(node)%7Bnode.classList.remove(%22absolute-off%22)%3Bnode.classList.add(%22absolute%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.isolate%22).forEach(function(node)%7Bnode.style.display%3D%22flex%22%7D)%3Bdocument.querySelectorAll(%22html%20*.fixed%22).forEach(function(node)%7Bnode.style.display%3Dnull%7D)%3Bdocument.getElementById(%22pf-styles%22).remove()%3Blet%20e%3Ddocument.getElementsByClassName(%22sm%3Ap-8%22)%3Bif(e.length%3E0)%7Be%5B0%5D.removeAttribute(%22style%22)%7Dwindow.PF%3Dnull%7Delse%7Bdocument.querySelectorAll(%22html%20*.overflow-hidden%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-hidden%22)%3Bnode.classList.add(%22overflow-hidden-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.overflow-auto%22).forEach(function(node)%7Bnode.classList.remove(%22overflow-auto%22)%3Bnode.classList.add(%22overflow-auto-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.tableContainer%22).forEach(function(node)%7Bnode.classList.remove(%22tableContainer%22)%3Bnode.classList.add(%22tableContainer-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.absolute%22).forEach(function(node)%7Bnode.classList.remove(%22absolute%22)%3Bnode.classList.add(%22absolute-off%22)%7D)%3Bdocument.querySelectorAll(%22html%20*.isolate%22).forEach(function(node)%7Bnode.style.display%3D%22none%22%7D)%3Bdocument.querySelectorAll(%22html%20*.fixed%22).forEach(function(node)%7Bnode.style.display%3D%22none%22%7D)%3Bdocument.querySelector(%22div%5Brole%3Dpresentation%5D%22).classList.remove(%22flex%22)%3Blet%20styleElement%3Ddocument.createElement(%22style%22)%3BstyleElement.id%3D%22pf-styles%22%3Bdocument.head.appendChild(styleElement)%3BstyleElement.sheet.insertRule(%22article%20%3E%20div%20%7Bpadding%3A%200px%20!important%3B%7D%22%2C0)%3BstyleElement.sheet.insertRule(%22article%20%3E%20div%20%3E%20div%20%7Bmax-width%3A%20100%25%20!important%3B%7D%22%2C0)%3BstyleElement.sheet.insertRule(%22.markdown%20td%2C%20.markdown%20th%20%7B%20padding%3A%202px%20!important%3B%7D%22%2C0)%3BstyleElement.sheet.insertRule(%22*%20%7B%20font-size%3A%2012px%3B%20line-height%3A%201.3%3B%20margin%3A%200px%20!important%3B%7D%22%2C0)%3Blet%20e%3Ddocument.getElementsByClassName(%22sm%3Ap-8%22)%3Bif(e.length%3E0)%7Be%5B0%5D.setAttribute(%22style%22%2C%22border%3A%20none%20!important%3B%20padding%3A%200px%20!important%3B%20box-shadow%3A%20none%20!important%3B%22)%7Dwindow.PF%3Dtrue%7D%7D)()%3B%0A
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
