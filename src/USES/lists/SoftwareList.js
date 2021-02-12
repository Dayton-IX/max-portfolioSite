import React from 'react';

import UsesItem from '../UsesItem/UsesItem';
import brave from '../../assets/brave.svg';

const SoftWareList = (props) => {
    const duckduckgo = <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2VhZjJmOCI+PHBhdGggZD0iTTExMyw5LjA0Yy01Ny4zNjUxNiwwIC0xMDMuOTYsNDYuNTk0ODQgLTEwMy45NiwxMDMuOTZjMCw1Ny4zNjUxNiA0Ni41OTQ4NCwxMDMuOTYgMTAzLjk2LDEwMy45NmM1Ny4zNjUxNiwwIDEwMy45NiwtNDYuNTk0ODQgMTAzLjk2LC0xMDMuOTZjMCwtNTcuMzY1MTYgLTQ2LjU5NDg0LC0xMDMuOTYgLTEwMy45NiwtMTAzLjk2ek0xMTMsMTguMDhjNTIuNDc0MzcsMCA5NC45Miw0Mi40NDU2MiA5NC45Miw5NC45MmMwLDQ1LjY1OTA2IC0zMi4wODE0MSw4My42OTA2MyAtNzUuMDAzNzUsOTIuODAxMjVjLTEuMDk0NjksLTEuNjk1IC0yLjM4MzU5LC0zLjY5MDE2IC0zLjk1NSwtNS45MzI1Yy0zLjI2NjQxLC00LjY3ODkxIC01LjU3OTM3LC04LjM1MTQxIC02LjkyMTI1LC0xMS4xNTg3NWM4LjU0NTYzLDMuNDc4MjggMTQuMjgzOTEsNS4yMjYyNSAxNy4yMzI1LDUuMjI2MjVjMi4xMzY0MSwwIDMuMjQ4NzUsLTMuMzM3MDMgMy4yNDg3NSwtMTAuMDI4NzVjMCwtMTIuNDMgLTEuMjUzNTksLTE4LjY0NSAtMy41MzEyNSwtMTguNjQ1Yy0zLjMzNzAzLDAgLTkuNzI4NTksMy42NTQ4NCAtMTkuMzUxMjUsMTEuMDE3NWMwLC0xLjg3MTU2IC0wLjk3MTA5LC0yLjY2NjA5IC0yLjk2NjI1LC0yLjQwMTI1aC0xLjEzYy0zLjQ3ODI4LC05LjIxNjU2IC01LjA4NSwtMTcuNDk3MzQgLTUuMDg1LC0yNC43MTg3NWMwLC0yLjAxMjgxIDAuMTU4OTEsLTMuOTE5NjkgMC41NjUsLTUuOTMyNWMxMi4yODg3NSw2LjAyMDc4IDIyLjE3NjI1LDguODk4NzUgMjkuNjYyNSw4Ljg5ODc1YzQuMTQ5MjIsMCAxMC40MzQ4NCwtMS4xMyAxOC43ODYyNSwtMy41MzEyNWM4LjM1MTQxLC0yLjQwMTI1IDEyLjQzLC00Ljk2MTQxIDEyLjQzLC03Ljc2ODc1YzAsLTEuNzMwMzEgLTEuMTEyMzQsLTIuNjgzNzUgLTMuMzksLTIuNjgzNzVjLTMuNDc4MjgsMCAtOC40MjIwMywwLjQ3NjcyIC0xNC45NzI1LDEuNDEyNWMtNi41NTA0NywwLjkzNTc4IC0xMS42MzU0NywxLjQxMjUgLTE1LjExMzc1LDEuNDEyNWMtMy42MDE4OCwwIC03LjUyMTU2LC0wLjk1MzQ0IC0xMS44NjUsLTIuODI1Yy00LjM0MzQ0LC0xLjg3MTU2IC02LjQ5NzUsLTQuNDE0MDYgLTYuNDk3NSwtNy42Mjc1YzAsLTAuNjcwOTQgMC4wNzA2MywtMS4yMTgyOCAwLjI4MjUsLTEuNTUzNzVjMC4yMTE4OCwtMC4zMTc4MSAwLjQ0MTQxLC0wLjQ5NDM3IDAuODQ3NSwtMC41NjVjMC40MDYwOSwtMC4wNzA2MyAwLjg2NTE2LC0wLjA3MDYzIDEuMjcxMjUsMGMwLjQwNjA5LDAuMDcwNjMgMC44ODI4MSwwLjIxMTg4IDEuNTUzNzUsMC4yODI1YzAuNjcwOTQsMC4wNzA2MyAxLjMwNjU2LDAgMS44MzYyNSwwYzEuMjAwNjMsMCAyLjk0ODU5LDAuMjI5NTMgNS4yMjYyNSwwLjU2NWMyLjI3NzY2LDAuMzM1NDcgMy44NjY3MiwwLjQyMzc1IDQuOTQzNzUsMC40MjM3NWM0LjE0OTIyLDAgMTIuNTg4OTEsLTIuMzMwNjIgMjUuNDI1LC03LjIwMzc1YzEyLjgzNjA5LC00Ljg3MzEzIDE5LjM1MTI1LC04Ljc3NTE2IDE5LjM1MTI1LC0xMS40NDEyNWMwLC0xLjYwNjcyIC0xLjM0MTg3LC0yLjcxOTA2IC0zLjgxMzc1LC0zLjM5Yy0yLjQ3MTg4LC0wLjY3MDk0IC00LjY0MzU5LC0wLjk4ODc1IC02Ljc4LC0wLjk4ODc1Yy0xLjg3MTU2LDAgLTQuNzMxODgsMC41NDczNCAtOC40NzUsMS41NTM3NWMtMy43NDMxMiwxLjAwNjQxIC03Ljg3NDY5LDIuMTM2NDEgLTEyLjI4ODc1LDMuNTMxMjVjLTQuNDE0MDYsMS4zOTQ4NCAtNy4yOTIwMywyLjQxODkxIC04Ljc1NzUsMi44MjVjMC41Mjk2OSwtMi42NjYwOSAwLjg0NzUsLTQuODkwNzggMC44NDc1LC02LjQ5NzVjMCwtNi4yODU2MiAtMS43NDc5NywtMTMuNTQyMzQgLTUuMDg1LC0yMS44OTM3NWMtMy4zMzcwMywtOC4zNTE0MSAtNy4xNjg0NCwtMTQuNjM3MDMgLTExLjU4MjUsLTE4LjY0NWMtMy42MDE4OCwtMy4yMTM0NCAtOC41Mjc5NywtNS4yOTY4OCAtMTQuNTQ4NzUsLTYuNDk3NWMtMy43NDMxMywtNC44MjAxNiAtOS41Njk2OSwtOS4xOTg5MSAtMTcuNTE1LC0xMy4xMzYyNWMtNy45NDUzMSwtMy45MzczNCAtMTQuOTAxODgsLTUuOTMyNSAtMjEuMDQ2MjUsLTUuOTMyNWMtMS4yMDA2MywwIC0zLjAzNjg3LDAuMjQ3MTkgLTUuNTA4NzUsMC43MDYyNWMtMi40NzE4NywwLjQ1OTA2IC00LjEzMTU2LDAuNzA2MjUgLTQuODAyNSwwLjg0NzVsLTQuMzc4NzUsNi4yMTVsMS4xMywwLjI4MjVjMC45MzU3OCwwIDIuNDM2NTYsLTAuMTU4OTEgNC4zNzg3NSwtMC40MjM3NWMxLjk0MjE5LC0wLjI2NDg0IDMuNDQyOTcsLTAuNDIzNzUgNC4zNzg3NSwtMC40MjM3NWM0LjUzNzY2LDAgOS42NTc5NywwLjk1MzQ0IDE1LjUzNzUsMi44MjVjLTMuNzQzMTMsMS44NzE1NiAtNi45Mzg5MSwzLjE0MjgxIC05Ljc0NjI1LDMuODEzNzVjLTAuMjY0ODQsMC4xNDEyNSAtMS4yMTgyOCwwLjIyOTUzIC0yLjY4Mzc1LDAuNDIzNzVjLTEuNDY1NDcsMC4xOTQyMiAtMi42NjYwOSwwLjUxMjAzIC0zLjY3MjUsMC43MDYyNWMtMS4wMDY0MSwwLjE5NDIyIC0xLjk1OTg0LDAuNTI5NjkgLTIuODI1LDEuMTNjLTAuODY1MTYsMC42MDAzMSAtMS4yNzEyNSwxLjMyNDIyIC0xLjI3MTI1LDIuMjZjNy40ODYyNSwtMC43OTQ1MyAxMy4wNjU2MiwtMS4xMyAxNi44MDg3NSwtMS4xM2M1LjA4NSwwIDkuMDc1MzEsMC40NzY3MiAxMi4wMDYyNSwxLjQxMjVjLTEwLjI5MzU5LDEuMjAwNjIgLTE4LjE4NTk0LDQuNzE0MjIgLTIzLjczLDEwLjU5Mzc1Yy01LjU0NDA2LDUuODc5NTMgLTguMzMzNzUsMTQuMDAxNDEgLTguMzMzNzUsMjQuMjk1YzAsMy42MDE4OCAwLjMxNzgxLDYuOTU2NTYgMC44NDc1LDEwLjAyODc1YzIuNTQyNSwxNi4wMzE4OCA3LjMyNzM0LDM5LjkzODQ0IDE0LjU0ODc1LDcxLjc1NWMzLjE5NTc4LDE0LjkzNzE5IDQuMjAyMTksMTkuNDkyNSA1LjM2NzUsMjQuNzE4NzVjLTM2LjA3MTcyLC0xMy40MzY0MSAtNjEuNzI2MjUsLTQ4LjE4MzkxIC02MS43MjYyNSwtODguOTg3NWMwLC01Mi40NzQzNyA0Mi40NDU2MiwtOTQuOTIgOTQuOTIsLTk0Ljkyek0xMjUuNTcxMjUsNzguODE3NWMzLjMzNzAzLDAgNS43MjA2MiwxLjQzMDE2IDcuMDYyNSw0LjM3ODc1Yy0yLjY2NjA5LC0xLjM0MTg4IC00Ljg5MDc4LC0xLjk3NzUgLTYuNjM4NzUsLTEuOTc3NWMtMy44NjY3MiwwIC02LjI2Nzk3LDAuODEyMTkgLTcuMzQ1LDIuNTQyNWMwLjUyOTY5LC0zLjMzNzAzIDIuNzg5NjksLTQuOTQzNzUgNi45MjEyNSwtNC45NDM3NXpNNzkuOTQ3NSw4MS4yMTg3NWMyLjU0MjUsMCA0LjQ0OTM4LDAuOTM1NzggNS43OTEyNSwyLjY4Mzc1Yy0xLjYwNjcyLC0wLjY3MDk0IC0yLjg5NTYzLC0xLjEzIC0zLjk1NSwtMS4xM2MtMi4yNzc2NiwwIC00LjgwMjUsMC43OTQ1MyAtNy4zNDUsMi40MDEyNWMtMi41NDI1LDEuNjA2NzIgLTMuNjU0ODQsMy41MTM1OSAtMy41MzEyNSw1LjY1Yy0wLjQwNjA5LC0wLjc5NDUzIC0wLjU2NSwtMS42MDY3MiAtMC41NjUsLTIuNDAxMjVjMCwtMi4yNzc2NiAxLjAyNDA2LC0zLjk1NSAzLjEwNzUsLTUuMjI2MjVjMi4wNjU3OCwtMS4yNzEyNSA0LjIxOTg0LC0xLjk3NzUgNi40OTc1LC0xLjk3NzV6TTEyOS4xMDI1LDkzLjY0ODc1YzEuNjA2NzIsMCAyLjk2NjI1LDAuNTY1IDQuMDk2MjUsMS42OTVjMS4xMywxLjEzIDEuNjk1LDIuNDg5NTMgMS42OTUsNC4wOTYyNWMwLDEuNDY1NDcgLTAuNTY1LDIuODk1NjIgLTEuNjk1LDQuMDk2MjVjLTEuMTMsMS4yMDA2MiAtMi40ODk1MywxLjY5NSAtNC4wOTYyNSwxLjY5NWMtMS40NjU0NywwIC0yLjg5NTYzLC0wLjQ5NDM4IC00LjA5NjI1LC0xLjY5NWMtMS4yMDA2MywtMS4yMDA2MyAtMS44MzYyNSwtMi42MzA3OCAtMS44MzYyNSwtNC4wOTYyNWMwLC0xLjYwNjcyIDAuNjM1NjMsLTIuOTY2MjUgMS44MzYyNSwtNC4wOTYyNWMxLjIwMDYyLC0xLjEzIDIuNjMwNzgsLTEuNjk1IDQuMDk2MjUsLTEuNjk1ek0xMzEuNjQ1LDk2LjA1Yy0wLjkzNTc4LDAgLTEuNDEyNSwwLjQ3NjcyIC0xLjQxMjUsMS40MTI1YzAsMS4wNzcwMyAwLjQ3NjcyLDEuNTUzNzUgMS40MTI1LDEuNTUzNzVjMS4wNzcwMywwIDEuNTUzNzUsLTAuNDc2NzIgMS41NTM3NSwtMS41NTM3NWMwLC0wLjkzNTc4IC0wLjQ3NjcyLC0xLjQxMjUgLTEuNTUzNzUsLTEuNDEyNXpNODMuNzYxMjUsOTYuNjE1YzEuNzMwMzEsMCAzLjI2NjQxLDAuNzA2MjUgNC42NjEyNSwyLjExODc1YzEuMzk0ODQsMS40MTI1IDIuMTE4NzUsMy4wNzIxOSAyLjExODc1LDQuODAyNWMwLDEuNzMwMzEgLTAuNzIzOTEsMy4yNjY0MSAtMi4xMTg3NSw0LjY2MTI1Yy0xLjM5NDg0LDEuMzk0ODQgLTIuOTMwOTQsMi4xMTg3NSAtNC42NjEyNSwyLjExODc1Yy0xLjczMDMxLDAgLTMuNDA3NjYsLTAuNzA2MjUgLTQuODAyNSwtMi4xMTg3NWMtMS4zOTQ4NCwtMS40MTI1IC0xLjk3NzUsLTIuOTMwOTQgLTEuOTc3NSwtNC42NjEyNWMwLC0xLjczMDMxIDAuNTY1LC0zLjQwNzY2IDEuOTc3NSwtNC44MDI1YzEuNDEyNSwtMS4zOTQ4NCAzLjA3MjE5LC0yLjExODc1IDQuODAyNSwtMi4xMTg3NXpNODYuNzI3NSw5OS40NGMtMS4yMDA2MywwIC0xLjgzNjI1LDAuNjM1NjIgLTEuODM2MjUsMS44MzYyNWMwLDEuMDc3MDMgMC42MzU2MywxLjU1Mzc1IDEuODM2MjUsMS41NTM3NWMxLjIwMDYzLDAgMS44MzYyNSwtMC40NzY3MiAxLjgzNjI1LC0xLjU1Mzc1YzAsLTEuMjAwNjMgLTAuNjM1NjIsLTEuODM2MjUgLTEuODM2MjUsLTEuODM2MjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
    const code = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"/></svg>
    const terminal = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"/></svg>
    const figma = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M277 170.7A85.35 85.35 0 0 0 277 0H106.3a85.3 85.3 0 0 0 0 170.6 85.35 85.35 0 0 0 0 170.7 85.35 85.35 0 1 0 85.3 85.4v-256zm0 0a85.3 85.3 0 1 0 85.3 85.3 85.31 85.31 0 0 0-85.3-85.3z"/></svg>
    const apple = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
    const brave = <svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m 6.49476,12.770421 c -0.20633,-0.1323 -0.87164,-0.573 -1.47847,-0.9793 -1.05922,-0.7092 -1.50078,-1.0539 -1.4517,-1.1333 0.0126,-0.02 -0.008,-0.049 -0.0458,-0.064 -0.0378,-0.014 -0.0578,-0.044 -0.0443,-0.066 0.0134,-0.022 0.003,-0.04 -0.0239,-0.04 -0.0526,0 -0.21045,-0.3373 -0.23238,-0.4966998 -0.007,-0.054 -0.0292,-0.1239 -0.0482,-0.1542 -0.019,-0.03 -0.0209,-0.077 -0.004,-0.1043 0.0167,-0.027 0.0118,-0.062 -0.0108,-0.077 -0.0226,-0.015 -0.0639,-0.1175 -0.0918,-0.2268 -0.0279,-0.1092 -0.0913,-0.3475 -0.14088,-0.5296 -0.0496,-0.182 -0.0986,-0.3742 -0.10893,-0.427 -0.0103,-0.053 -0.12012,-0.4797 -0.24404,-0.9488 -0.12391,-0.4691 -0.29585,-1.121 -0.38208,-1.4487 -0.0862,-0.3277 -0.19369,-0.7307 -0.23878,-0.8957 l -0.082,-0.2998 0.18915,-0.4577 c 0.20933,-0.5066 0.21092,-0.4251 -0.0197,-1.0088 l -0.10142,-0.2567 0.43756,-0.4416 c 0.45126,-0.4555 0.60118,-0.5585 0.94996,-0.6529 0.17436,-0.047 0.24311,-0.044 0.48044,0.023 l 0.27695,0.078 0.24555,-0.2612 c 0.13505,-0.1437 0.38265,-0.4053 0.55023,-0.5813 l 0.30469,-0.3199 1.82171,0 1.82171,0 0.35036,0.3641 c 0.1927,0.2002 0.44071,0.462 0.55113,0.5817 l 0.20078,0.2177 0.27954,-0.1019 c 0.30277,-0.1104 0.33559,-0.1066 0.77779,0.091 0.16456,0.074 1.02302,0.8895 1.06581,1.0129 0.008,0.024 -0.0237,0.1276 -0.0713,0.23 -0.21947,0.4722 -0.21923,0.4615 -0.023,0.9991 l 0.17866,0.4896 -0.30462,1.1582 c -0.16753,0.6369 -0.40207,1.5354 -0.52117,1.9966 -0.48521,1.8788 -0.54304,2.0831998 -0.64912,2.2949998 -0.25385,0.5066 -0.38708,0.618 -2.21679,1.8536 -1.42327,0.961 -1.37762,0.9474 -1.94661,0.5824 z m 1.07386,-2.6241 C 7.81615,9.9326212 8.1723,9.6505212 8.36006,9.5194212 c 0.33378,-0.2331 0.40313,-0.3379 0.2862,-0.4326 -0.10091,-0.082 -0.6678,-0.3658 -1.07023,-0.5364 -0.38624,-0.1637 -0.72821,-0.2513 -0.72821,-0.1866 0,0.018 -0.0444,0.035 -0.0986,0.039 -0.0543,0 -0.1056,0.028 -0.1141,0.054 -0.009,0.025 -0.0336,0.035 -0.0558,0.021 -0.0222,-0.014 -0.0404,0 -0.0404,0.021 0,0.025 -0.0272,0.035 -0.0605,0.022 -0.0333,-0.013 -0.0905,0.01 -0.12715,0.043 -0.0367,0.037 -0.0789,0.054 -0.094,0.039 -0.015,-0.015 -0.0273,0 -0.0273,0.027 0,0.03 -0.0199,0.042 -0.0441,0.027 -0.0243,-0.015 -0.0441,-0.01 -0.0441,0.022 0,0.027 -0.0199,0.037 -0.0441,0.022 -0.0243,-0.015 -0.0441,0 -0.0441,0.022 0,0.027 -0.0199,0.037 -0.0441,0.022 -0.0243,-0.015 -0.0441,-0.01 -0.0441,0.022 0,0.027 -0.0199,0.037 -0.0441,0.022 -0.0243,-0.015 -0.0441,-0.01 -0.0441,0.022 0,0.027 -0.0199,0.037 -0.0441,0.022 -0.0243,-0.015 -0.0441,-0.01 -0.0441,0.022 0,0.027 -0.0199,0.037 -0.0441,0.022 -0.0243,-0.015 -0.0441,-0.01 -0.0441,0.019 0,0.026 -0.0149,0.044 -0.0331,0.042 -0.0867,-0.014 -0.14829,0.014 -0.25838,0.1159 -0.1057,0.098 -0.11359,0.1238 -0.0683,0.2232 0.0282,0.062 0.0689,0.1015 0.0905,0.088 0.0216,-0.013 0.0518,0.01 0.067,0.048 0.0153,0.04 0.0404,0.06 0.0558,0.044 0.0155,-0.015 0.0561,0.012 0.0902,0.061 0.0342,0.049 0.0786,0.079 0.0986,0.066 0.0201,-0.012 0.049,0.01 0.0642,0.05 0.0153,0.04 0.0397,0.06 0.0542,0.046 0.0146,-0.015 0.0631,0.017 0.10783,0.071 0.0447,0.054 0.082,0.081 0.0828,0.061 8.1e-4,-0.02 0.0536,0.025 0.1173,0.1012 0.0637,0.076 0.12488,0.1285998 0.13595,0.1174998 0.0111,-0.011 0.0908,0.058 0.17723,0.1538 0.0864,0.096 0.16689,0.1641 0.17884,0.1521 0.012,-0.012 0.0568,0.023 0.0997,0.077 0.0463,0.059 0.13479,0.1035 0.21777,0.1098 0.11908,0.01 0.20656,-0.047 0.58988,-0.3779 z M 5.21489,8.7650212 c 0,-0.026 0.0185,-0.035 0.0411,-0.021 0.0501,0.031 0.3561,-0.1094 0.3561,-0.1634 0,-0.021 0.0199,-0.026 0.0441,-0.011 0.0243,0.015 0.0441,0.01 0.0441,-0.022 0,-0.027 0.0199,-0.037 0.0441,-0.022 0.0243,0.015 0.0441,0.01 0.0441,-0.022 0,-0.027 0.0199,-0.037 0.0441,-0.022 0.0243,0.015 0.0441,0 0.0441,-0.022 0,-0.027 0.0199,-0.037 0.0441,-0.022 0.0243,0.015 0.0441,0.01 0.0441,-0.022 0,-0.027 0.0197,-0.037 0.0438,-0.022 0.0241,0.015 0.0924,-0.022 0.15179,-0.081 0.0594,-0.059 0.11626,-0.1 0.12632,-0.09 0.0101,0.01 0.10063,-0.071 0.20127,-0.1803 0.10065,-0.1092 0.18299,-0.1855 0.18299,-0.1697 0,0.016 0.049,-0.017 0.10897,-0.074 0.0599,-0.056 0.0985,-0.1194 0.0857,-0.1401 -0.0128,-0.021 -0.006,-0.038 0.0144,-0.038 0.0475,0 0.0452,-0.1797 -0.003,-0.2553 -0.045,-0.07 -1.08849,-0.7725 -1.08849,-0.7326 0,0.016 -0.0397,-0.022 -0.0883,-0.083 -0.11027,-0.1402 -0.11059,-0.2125 -0.002,-0.4256 0.0475,-0.093 0.074,-0.1817 0.0589,-0.1968 -0.0151,-0.015 -0.003,-0.027 0.0266,-0.027 0.0298,0 0.0418,-0.02 0.0268,-0.044 -0.015,-0.024 -0.005,-0.044 0.0221,-0.044 0.0271,0 0.0371,-0.02 0.0221,-0.044 -0.015,-0.024 -0.007,-0.044 0.0183,-0.044 0.0817,0 0.19623,-0.2819 0.20161,-0.4965 0.003,-0.1153 -0.0118,-0.2096 -0.0327,-0.2096 -0.0209,0 -0.0273,-0.017 -0.0143,-0.038 0.013,-0.021 -0.0156,-0.074 -0.0636,-0.1172 -0.048,-0.043 -0.0872,-0.065 -0.0872,-0.047 0,0.018 -0.0314,7e-4 -0.0698,-0.038 -0.0384,-0.038 -0.088,-0.058 -0.11033,-0.045 -0.0223,0.014 -0.0406,0 -0.0406,-0.026 0,-0.028 -0.0285,-0.041 -0.0633,-0.027 -0.0348,0.013 -0.0699,0 -0.0779,-0.019 -0.008,-0.024 -0.0589,-0.047 -0.11319,-0.051 -0.0542,0 -0.0986,-0.025 -0.0986,-0.046 0,-0.021 -0.0246,-0.03 -0.0548,-0.02 -0.0301,0.01 -0.0823,-0.01 -0.11602,-0.043 -0.0337,-0.034 -0.0885,-0.051 -0.12176,-0.038 -0.0333,0.013 -0.0605,0 -0.0605,-0.024 0,-0.026 -0.0298,-0.036 -0.0662,-0.022 -0.0364,0.014 -0.0662,0 -0.0662,-0.02 0,-0.025 -0.0185,-0.034 -0.0411,-0.02 -0.0226,0.014 -0.0538,0 -0.0693,-0.02 -0.0155,-0.025 -0.0466,-0.034 -0.0693,-0.02 -0.0226,0.014 -0.0411,0 -0.0411,-0.026 0,-0.028 -0.0298,-0.04 -0.0662,-0.026 -0.0364,0.014 -0.0662,0.01 -0.0662,-0.017 0,-0.024 0.0761,-0.043 0.16918,-0.043 0.0931,0 0.18218,-0.013 0.19807,-0.029 0.0401,-0.04 0.73341,-0.045 0.74706,0 0.006,0.018 0.0707,0.039 0.14349,0.047 0.0728,0.01 0.17212,0.035 0.22067,0.06 0.0486,0.025 0.17764,0.069 0.28687,0.099 0.17623,0.048 0.19818,0.067 0.1949,0.1757 -0.002,0.067 -0.0182,0.1455 -0.036,0.1742 -0.0177,0.029 -0.0197,0.092 -0.004,0.1401 0.0171,0.054 0.008,0.088 -0.0244,0.088 -0.0319,0 -0.0441,0.043 -0.0312,0.1103 0.0116,0.061 0.002,0.1103 -0.0221,0.1103 -0.0237,0 -0.0337,0.05 -0.0221,0.1104 0.0116,0.061 0.002,0.1103 -0.0219,0.1103 -0.0237,0 -0.0343,0.06 -0.0236,0.1324 0.0107,0.073 5.3e-4,0.1324 -0.0226,0.1324 -0.0231,0 -0.0301,0.06 -0.0155,0.1324 0.0164,0.082 0.008,0.1324 -0.0213,0.1324 -0.0286,0 -0.037,0.043 -0.0208,0.1076 0.0149,0.059 0.007,0.12 -0.0173,0.135 -0.0734,0.045 -0.0499,0.2405 0.0406,0.3377 0.0467,0.05 0.10627,0.078 0.1324,0.062 0.0261,-0.016 0.0475,-0.01 0.0475,0.023 0,0.03 0.037,0.042 0.0883,0.029 0.0486,-0.013 0.0883,0 0.0883,0.022 0,0.025 0.0465,0.033 0.10763,0.018 0.0592,-0.015 0.12032,-0.01 0.13584,0.019 0.0161,0.026 0.0978,0.035 0.19027,0.02 0.81974,-0.1288 0.93375,-0.1705 0.93526,-0.3424 4.7e-4,-0.054 -0.0725,-0.5012 -0.16227,-0.9937 -0.14111,-0.7744 -0.15463,-0.9036 -0.10016,-0.9567 0.0346,-0.034 0.2715,-0.1154 0.52637,-0.1816 0.43556,-0.113 0.49736,-0.1182 1.02885,-0.087 0.311,0.018 0.55739,0.041 0.54754,0.051 -0.01,0.01 -0.35368,0.1448 -0.76406,0.2999 -1.15466,0.4365 -1.18024,0.4809 -0.75215,1.3072 0.16107,0.3109 0.28193,0.5938 0.26858,0.6286 -0.0134,0.035 -0.31273,0.2571 -0.66527,0.4939 -0.35254,0.2369 -0.65245,0.4606 -0.66647,0.4972 -0.0464,0.1208 0.0503,0.2616 0.38511,0.5609 0.23048,0.2059 0.47618,0.3686 0.80904,0.5354 0.26291,0.1318 0.51116,0.2396 0.55166,0.2395 0.18951,-5e-4 0.59142,-0.3574 0.71926,-0.6388 0.11036,-0.243 0.10259,-0.4523 -0.0277,-0.747 -0.0607,-0.1372 -0.11034,-0.3103 -0.11034,-0.3846 0,-0.15 0.0215,-0.1765 0.9599,-1.1846 0.56865,-0.6109 0.58477,-0.6337 0.58477,-0.8248 0,-0.108 -0.0327,-0.26 -0.0727,-0.3377 -0.13242,-0.2573 -0.50955,-0.7965 -0.90785,-1.2981 -0.37875,-0.477 -0.39805,-0.4939 -0.53371,-0.4689 -0.0774,0.014 -0.32664,0.063 -0.55384,0.1087 -0.56258,0.1127 -0.67429,0.1062 -1.24192,-0.072 -0.62413,-0.1957 -0.80201,-0.1954 -1.41488,0 -0.26754,0.086 -0.56011,0.1574 -0.65015,0.1576 -0.09,3e-4 -0.41196,-0.049 -0.71537,-0.1092 l -0.55167,-0.1096 -0.18522,0.1823 c -0.10187,0.1003 -0.17647,0.1911 -0.16578,0.2018 0.0107,0.011 -0.0205,0.047 -0.0693,0.082 -0.0488,0.034 -0.0786,0.078 -0.0663,0.098 0.0123,0.02 -0.0288,0.07 -0.0913,0.1108 -0.0626,0.041 -0.10226,0.086 -0.0882,0.1002 0.0141,0.014 -0.0143,0.054 -0.0631,0.088 -0.0488,0.034 -0.0786,0.079 -0.0662,0.099 0.0124,0.02 -0.008,0.048 -0.0462,0.063 -0.0378,0.014 -0.0577,0.044 -0.0441,0.066 0.0135,0.022 -0.006,0.052 -0.0441,0.066 -0.0378,0.014 -0.0577,0.044 -0.0441,0.066 0.0135,0.022 -0.008,0.052 -0.0477,0.067 -0.0397,0.015 -0.0616,0.038 -0.0485,0.052 0.0131,0.013 -0.0234,0.075 -0.0811,0.1369 -0.0577,0.062 -0.0954,0.1284 -0.0839,0.1471 0.0115,0.019 -0.01,0.046 -0.0478,0.06 -0.0378,0.014 -0.0564,0.046 -0.0413,0.071 0.0151,0.024 0.005,0.044 -0.0219,0.044 -0.0271,0 -0.0379,0.019 -0.0239,0.041 0.014,0.023 0.005,0.054 -0.0195,0.069 -0.0596,0.037 -0.0579,0.3756 0.002,0.3756 0.0257,0 0.0345,0.02 0.0195,0.044 -0.015,0.024 -0.006,0.044 0.0195,0.044 0.0257,0 0.0467,0.027 0.0467,0.061 0,0.034 0.0844,0.1374 0.18757,0.2307 0.10316,0.093 0.18347,0.1824 0.17846,0.198 -0.005,0.016 0.1461,0.1794 0.33581,0.364 0.1897,0.1846 0.3382,0.3423 0.33,0.3505 -0.008,0.01 0.074,0.1022 0.18276,0.2089 0.10872,0.1067 0.19767,0.218 0.19767,0.2474 0,0.029 0.0248,0.063 0.0552,0.076 0.043,0.017 0.042,0.032 -0.004,0.064 -0.0327,0.023 -0.0625,0.094 -0.0662,0.1578 -0.004,0.064 -0.0249,0.1161 -0.0472,0.1161 -0.0222,0 -0.0282,0.012 -0.0131,0.027 0.015,0.015 -0.003,0.057 -0.0393,0.094 -0.0367,0.037 -0.0562,0.094 -0.0434,0.1272 0.0128,0.033 0.004,0.061 -0.0195,0.061 -0.0235,0 -0.0427,0.07 -0.0427,0.1544 0,0.085 0.0192,0.1545 0.0427,0.1545 0.0235,0 0.0313,0.03 0.0173,0.066 -0.014,0.036 -0.002,0.066 0.0261,0.066 0.0283,0 0.0392,0.02 0.0242,0.044 -0.015,0.024 -0.005,0.044 0.0221,0.044 0.0271,0 0.0371,0.02 0.0221,0.044 -0.015,0.024 -0.006,0.044 0.0195,0.044 0.0257,0 0.0418,0.015 0.0358,0.033 -0.015,0.046 0.36786,0.433 0.41453,0.4193 0.0207,-0.01 0.0377,0.01 0.0377,0.036 0,0.026 0.0185,0.035 0.0411,0.021 0.0226,-0.014 0.0536,-0.01 0.0688,0.019 0.0366,0.059 0.15491,0.058 0.15491,0 z"/></svg>
    
    return (
        <span>
            <UsesItem icon={apple} title='Mac OS' name='macOS Big Sur' />
            <UsesItem icon={apple} title='IPhone OS' name='iOS 14' />
            <UsesItem icon={brave} title='Web Browser' name='Brave' text="Brave is a cool new browser built on cromium that has built in ad-block and it's own cryptocurrency."/>
            <UsesItem icon={duckduckgo} title='Search Engine' name='Duck Duck Go' text="I use Duck Duck Go because I value my privacy and the simplicity of the search engine is very nice."/>
            <UsesItem icon={code} title='Code Editor' name='Visual Studio Code' text="My favorite coding environment. VSCode has lots of cool features and many extentions, themes, and icon packs to install."/>
            <UsesItem icon={terminal} title='Terminal' name='Hyper' text="Hyper is a sleek, fast terminal built on web technologies."/>
            <UsesItem icon={figma} title="Design Tool" name='Figma' text="Figma is a design tool I use for web design. It's great for teams and has a lot of cool features that aren't in other design tools."/>
        </span>
    )
};

export default SoftWareList;