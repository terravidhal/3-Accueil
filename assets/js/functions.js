
/******** VARIABLE DECLARATION ************/
const pagesAsideLeft = document.getElementsByClassName('page-aside-left');
const pagesContent = document.getElementsByClassName('page-content');
const menuPages = document.getElementsByClassName('menu-page');
const contactLists = document.getElementsByClassName('contact-list');
const returnHome = document.getElementsByClassName('return');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

/******** OBJECT CONTAINING OUR FUNCTIONS ************/

var listenersFunctions = {

    hiddenPagesAside: () => {
        // Get all the pages of the "Aside-left" part and hide them, except the 1st
        for (let index = 1; index < pagesAsideLeft.length; index++) {
            const page = pagesAsideLeft[index];
            page.style.display = "none";
        }
    },
    showPagesAside: () => {
        for (let index = 0; index < menuPages.length; index++) {
            const menuPage = menuPages[index];
            const pageID = menuPage.getAttribute('data-id');
            menuPage.addEventListener('click', () => {
                for (let index = 0; index < pagesAsideLeft.length; index++) {
                    const element = pagesAsideLeft[index];
                    element.style.display = 'none';
                }
                // Displays the item corresponding to the ID of the clicked page
                var pageElement = document.getElementById(pageID);
                pageElement.style.display = 'block';
            });
        }
    },
    returnHome: () => {
        for (let index = 0; index < returnHome.length; index++) {
            const returnIcon = returnHome[index];
            returnIcon.addEventListener('click', () => {
                pagesAsideLeft[0].style.display = 'block';
                listenersFunctions.hiddenPagesAside();
            })
        }
    },
    hiddenPagesContent: () => {
        for (let index = 1; index < pagesContent.length; index++) {
            const pagecontent = pagesContent[index];
            pagecontent.style.display = "none";
        }
    },
    showPagesContent: () => {
        for (let index = 0; index < contactLists.length; index++) {
            const contactList = contactLists[index];
            const pageContentID = contactList.getAttribute('data-id');
            contactList.addEventListener('click', () => {
                for (let index = 0; index < pagesContent.length; index++) {
                    const element = pagesContent[index];
                    element.style.display = 'none';
                }
                listenersFunctions.showActiveDiscussion(contactList, Class = "active-bg")

                const pageElements = document.getElementById(pageContentID);
                pageElements.style.display = 'block';
            });
        }
    },
    showIconDiscussion: () => {
        const contactItems = document.getElementsByClassName('contact-item')
        for (let index = 0; index < contactItems.length; index++) {
            const contactItem = contactItems[index];
            contactItem.addEventListener('mouseover', () => {
                document.querySelectorAll('.contact-time-icon >img')[index].classList.add('arrow-active');
            });
            contactItem.addEventListener('mouseout', () => {
                document.querySelectorAll('.contact-time-icon >img')[index].classList.remove('arrow-active');
            });
        }
    },
    showIconMessage: () => {
        const messageBlocContents = document.querySelectorAll('.message-bloc.receive')
        for (let index = 0; index < messageBlocContents.length; index++) {
            const element = messageBlocContents[index];
            element.addEventListener('mouseover', () => {
                document.querySelectorAll('.message-bloc.receive .icon-arrow-bottom > img')[index].classList.add('m-active');
            });
            element.addEventListener('mouseout', () => {
                document.querySelectorAll('.message-bloc.receive .icon-arrow-bottom > img')[index].classList.remove('m-active');
            });
        }
        const messageBlocsend = document.querySelectorAll('.message-bloc-s')
        for (let index = 0; index < messageBlocsend.length; index++) {
            const element = messageBlocsend[index];
            element.addEventListener('mouseover', () => {
                document.querySelectorAll('.message-bloc-s .icon-arrow-bottom-s > img')[index].classList.add('m-active');
            });
            element.addEventListener('mouseout', () => {
                document.querySelectorAll('.message-bloc-s .icon-arrow-bottom-s > img')[index].classList.remove('m-active');
            });
        }
        const pictureBloc = document.querySelectorAll('.picture-bloc')
        for (let index = 0; index < pictureBloc.length; index++) {
            const element = pictureBloc[index];
            element.addEventListener('mouseover', () => {
                document.querySelectorAll('.picture-bloc .icon-arrow-bottom-p > img')[index].classList.add('m-active');
            });
            element.addEventListener('mouseout', () => {
                document.querySelectorAll('.picture-bloc .icon-arrow-bottom-p > img')[index].classList.remove('m-active');
            });
        }
        const pictureMessageBloc = document.querySelectorAll('.picture-message-bloc')
        for (let index = 0; index < pictureMessageBloc.length; index++) {
            const element = pictureMessageBloc[index];
            element.addEventListener('mouseover', () => {
                document.querySelectorAll('.picture-message-bloc .icon-arrow-bottom-p > img')[index].classList.add('m-active');
            });
            element.addEventListener('mouseout', () => {
                document.querySelectorAll('.picture-message-bloc .icon-arrow-bottom-p > img')[index].classList.remove('m-active');
            });
        }
        const responseMessageBloc = document.querySelectorAll('.response-message-bloc')
        for (let index = 0; index < responseMessageBloc.length; index++) {
            const element = responseMessageBloc[index];
            element.addEventListener('mouseover', () => {
                document.querySelectorAll('.response-message-bloc .icon-arrow-bottom-resp > img')[index].classList.add('m-active');
            });
            element.addEventListener('mouseout', () => {
                document.querySelectorAll('.response-message-bloc .icon-arrow-bottom-resp > img')[index].classList.remove('m-active');
            });
        }
        const audioBloc = document.querySelectorAll('.audio-bloc')
        for (let index = 0; index < audioBloc.length; index++) {
            const element = audioBloc[index];
            element.addEventListener('mouseover', () => {
                document.querySelectorAll('.icon-arrow-bottom-audio > img')[index].classList.add('m-active');
            });
            element.addEventListener('mouseout', () => {
                document.querySelectorAll('.icon-arrow-bottom-audio > img')[index].classList.remove('m-active');
            });
        }
    },
    showActiveDiscussion: (contactList, Class = "active-bg") => {
        for (let index = 0; index < contactLists.length; index++) {
            const element = contactLists[index];
            element.classList.remove(Class);
        }
        contactList.classList.add(Class);
    },
    showMenu: () => {
        document.getElementsByClassName('menu')[0].addEventListener('click', () => {
            document.getElementsByClassName('menu')[0].classList.toggle('active-bg-icon-menu');
            document.getElementsByClassName('menu-lists')[0].classList.toggle('show');
        })
    },
    TransformSearchIcon: () => {
        document.querySelector('.bars-icon input').addEventListener('click', () => {
            document.getElementsByClassName('search-icon')[0].classList.toggle('transform')
        });
        document.getElementsByClassName('search-icon')[0].addEventListener('click', (ev) => {
            ev.target.classList.toggle('transform')
            document.querySelector('.bars-icon input').value = '';
            listenersFunctions.searchMessages("");
        });
    },
    getInputSearch: () => {
        document.querySelector('.bars-icon input').addEventListener('input', (ev) => {
            let searchTerm = ev.target.value.trim();
            listenersFunctions.searchMessages(searchTerm);
        });
        document.querySelector('.bars-icon input').value = '';
    },
    searchMessages: (searchTerm) => {
        let resultFound = false;

        for (let index = 0; index < contactLists.length; index++) {
            const messageText = contactLists[index].textContent.toLowerCase();
            const contactName = document.getElementsByClassName('contact-name');


            if (messageText.indexOf(searchTerm.toLowerCase()) !== -1) {
                contactLists[index].style.display = 'flex';
                resultFound = true; // one result was found

                //Store the original content of the div in a data attribute
                if (!contactName[index].hasAttribute('data-original-text')) {
                    contactName[index].setAttribute('data-original-text', contactName[index].textContent);
                }

                // Replace only the text inside the div with the colored text
                const regex = new RegExp(searchTerm, 'gi');
                const newText = contactName[index].getAttribute('data-original-text').replace(regex, `<span class="highlight">${searchTerm}</span>`);
                contactName[index].innerHTML = newText;

            } else {
                contactLists[index].style.display = 'none';

                // Restores the original content of the div from the data attribute
                if (contactName[index].hasAttribute('data-original-text')) {
                    contactName[index].textContent = contactName[index].getAttribute('data-original-text');
                    contactName[index].removeAttribute('data-original-text');
                }
            }

        }

        // Display the message "No contact, discussion or message found" if no results were found
        const messagesNoResults = document.querySelector('.messages-no-results');
        !resultFound ? messagesNoResults.classList.remove('none') : messagesNoResults.classList.add('none');

    },

    updateProgress: () => {
        audio.addEventListener('timeupdate', () => {
            const duration = audio.duration;
            const currentTime = audio.currentTime;
            const percent = (currentTime / duration) * 100;
            progress.value = percent;
            console.log(currentTime);
        });
    },
    ConvertCurrentTime: () => {
        audio.addEventListener('timeupdate', () => {
            const currentTime = audio.currentTime;
            // Convertir le temps actuel en minutes et secondes
            const minutes = Math.floor(currentTime / 60);
            const seconds = Math.floor(currentTime % 60);

            // Ajouter un zéro devant les secondes si nécessaire
            const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

            // Afficher le temps au format "minutes:secondes" dans la console
           // console.log(`${minutes}:${displaySeconds}`);
            const audioDuration = document.getElementsByClassName('audio-duration');
            for (let index = 0; index < audioDuration.length; index++) {
                const element = audioDuration[index];
                element.innerHTML = `${minutes}:${displaySeconds}`;
            }
        });
    },

    updateAudioPosition: () => {
        progress.addEventListener('change', () => {
            let value = progress.value;
            let max = progress.max;
            let position = (value / max) * audio.duration;
            audio.currentTime = position;
        });
    },
    PlayEndAudio: () => {
        playButton.addEventListener('click', () => {
            playButton.classList.add('none');
            pauseButton.classList.remove('none');
            document.getElementsByClassName('profil-picture-microphone')[0].classList.add('none');
            document.getElementsByClassName('reading-speed')[0].classList.remove('none');
            audio.play();
        });

        pauseButton.addEventListener('click', () => {
            pauseButton.classList.add('none');
            playButton.classList.remove('none');
            audio.pause();
        });

        audio.addEventListener('ended', () => {
            progress.value = 100;
            document.getElementsByClassName('profil-picture-microphone')[0].classList.remove('none');
            document.getElementsByClassName('reading-speed')[0].classList.add('none');
            pauseButton.classList.add('none');
            playButton.classList.remove('none');
            progress.value = 0;
        });
    },

}

/******** CALLING FUNCTIONS ************/

var setupFunctions = () => {
    listenersFunctions.hiddenPagesAside();
    listenersFunctions.showPagesAside();
    listenersFunctions.returnHome();
    listenersFunctions.hiddenPagesContent();
    listenersFunctions.showPagesContent();
    listenersFunctions.showIconDiscussion();
    listenersFunctions.showMenu();
    listenersFunctions.getInputSearch();
    listenersFunctions.TransformSearchIcon();
    listenersFunctions.updateProgress();
    listenersFunctions.updateAudioPosition();
    listenersFunctions.PlayEndAudio();
    listenersFunctions.showIconMessage();
    listenersFunctions.ConvertCurrentTime();
}




