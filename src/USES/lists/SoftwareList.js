import React from 'react';

import UsesItem from '../UsesItem/UsesItem';

const SoftWareList = (props) => {
    const windows = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
    const android = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/></svg>
    const firefox = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M189.37,152.86Zm-58.74-29.37C130.79,123.5,130.71,123.5,130.63,123.49Zm351.42,45.35c-10.61-25.5-32.08-53-48.94-61.73,13.72,26.89,21.67,53.88,24.7,74,0,0,0,.14.05.41-27.58-68.75-74.35-96.47-112.55-156.83-1.93-3.05-3.86-6.11-5.74-9.33-1-1.65-1.86-3.34-2.69-5.05A44.88,44.88,0,0,1,333.24.69a.63.63,0,0,0-.55-.66.9.9,0,0,0-.46,0l-.12.07-.18.1.1-.14c-54.23,31.77-76.72,87.38-82.5,122.78a130,130,0,0,0-48.33,12.33,6.25,6.25,0,0,0-3.09,7.75,6.13,6.13,0,0,0,7.79,3.79l.52-.21a117.84,117.84,0,0,1,42.11-11l1.42-.1c2-.12,4-.2,6-.22A122.61,122.61,0,0,1,291,140c.67.2,1.32.42,2,.63,1.89.57,3.76,1.2,5.62,1.87,1.36.5,2.71,1,4.05,1.58,1.09.44,2.18.88,3.25,1.35q2.52,1.13,5,2.35c.75.37,1.5.74,2.25,1.13q2.4,1.26,4.74,2.63,1.51.87,3,1.8a124.89,124.89,0,0,1,42.66,44.13c-13-9.15-36.35-18.19-58.82-14.28,87.74,43.86,64.18,194.9-57.39,189.2a108.43,108.43,0,0,1-31.74-6.12c-2.42-.91-4.8-1.89-7.16-2.93-1.38-.63-2.76-1.27-4.12-2C174.5,346,149.9,316.92,146.83,281.59c0,0,11.25-41.95,80.62-41.95,7.5,0,28.93-20.92,29.33-27-.09-2-42.54-18.87-59.09-35.18-8.85-8.71-13.05-12.91-16.77-16.06a69.58,69.58,0,0,0-6.31-4.77A113.05,113.05,0,0,1,173.92,97c-25.06,11.41-44.55,29.45-58.71,45.37h-.12c-9.67-12.25-9-52.65-8.43-61.08-.12-.53-7.22,3.68-8.15,4.31a178.54,178.54,0,0,0-23.84,20.43A214,214,0,0,0,51.9,133.36l0,0a.08.08,0,0,1,0,0,205.84,205.84,0,0,0-32.73,73.9c-.06.27-2.33,10.21-4,22.48q-.42,2.87-.78,5.74c-.57,3.69-1,7.71-1.44,14,0,.24,0,.48-.05.72-.18,2.71-.34,5.41-.49,8.12,0,.41,0,.82,0,1.24,0,134.7,109.21,243.89,243.92,243.89,120.64,0,220.82-87.58,240.43-202.62.41-3.12.74-6.26,1.11-9.41,4.85-41.83-.54-85.79-15.82-122.55Z"/></svg>
    const duckduckgo = <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2VhZjJmOCI+PHBhdGggZD0iTTExMyw5LjA0Yy01Ny4zNjUxNiwwIC0xMDMuOTYsNDYuNTk0ODQgLTEwMy45NiwxMDMuOTZjMCw1Ny4zNjUxNiA0Ni41OTQ4NCwxMDMuOTYgMTAzLjk2LDEwMy45NmM1Ny4zNjUxNiwwIDEwMy45NiwtNDYuNTk0ODQgMTAzLjk2LC0xMDMuOTZjMCwtNTcuMzY1MTYgLTQ2LjU5NDg0LC0xMDMuOTYgLTEwMy45NiwtMTAzLjk2ek0xMTMsMTguMDhjNTIuNDc0MzcsMCA5NC45Miw0Mi40NDU2MiA5NC45Miw5NC45MmMwLDQ1LjY1OTA2IC0zMi4wODE0MSw4My42OTA2MyAtNzUuMDAzNzUsOTIuODAxMjVjLTEuMDk0NjksLTEuNjk1IC0yLjM4MzU5LC0zLjY5MDE2IC0zLjk1NSwtNS45MzI1Yy0zLjI2NjQxLC00LjY3ODkxIC01LjU3OTM3LC04LjM1MTQxIC02LjkyMTI1LC0xMS4xNTg3NWM4LjU0NTYzLDMuNDc4MjggMTQuMjgzOTEsNS4yMjYyNSAxNy4yMzI1LDUuMjI2MjVjMi4xMzY0MSwwIDMuMjQ4NzUsLTMuMzM3MDMgMy4yNDg3NSwtMTAuMDI4NzVjMCwtMTIuNDMgLTEuMjUzNTksLTE4LjY0NSAtMy41MzEyNSwtMTguNjQ1Yy0zLjMzNzAzLDAgLTkuNzI4NTksMy42NTQ4NCAtMTkuMzUxMjUsMTEuMDE3NWMwLC0xLjg3MTU2IC0wLjk3MTA5LC0yLjY2NjA5IC0yLjk2NjI1LC0yLjQwMTI1aC0xLjEzYy0zLjQ3ODI4LC05LjIxNjU2IC01LjA4NSwtMTcuNDk3MzQgLTUuMDg1LC0yNC43MTg3NWMwLC0yLjAxMjgxIDAuMTU4OTEsLTMuOTE5NjkgMC41NjUsLTUuOTMyNWMxMi4yODg3NSw2LjAyMDc4IDIyLjE3NjI1LDguODk4NzUgMjkuNjYyNSw4Ljg5ODc1YzQuMTQ5MjIsMCAxMC40MzQ4NCwtMS4xMyAxOC43ODYyNSwtMy41MzEyNWM4LjM1MTQxLC0yLjQwMTI1IDEyLjQzLC00Ljk2MTQxIDEyLjQzLC03Ljc2ODc1YzAsLTEuNzMwMzEgLTEuMTEyMzQsLTIuNjgzNzUgLTMuMzksLTIuNjgzNzVjLTMuNDc4MjgsMCAtOC40MjIwMywwLjQ3NjcyIC0xNC45NzI1LDEuNDEyNWMtNi41NTA0NywwLjkzNTc4IC0xMS42MzU0NywxLjQxMjUgLTE1LjExMzc1LDEuNDEyNWMtMy42MDE4OCwwIC03LjUyMTU2LC0wLjk1MzQ0IC0xMS44NjUsLTIuODI1Yy00LjM0MzQ0LC0xLjg3MTU2IC02LjQ5NzUsLTQuNDE0MDYgLTYuNDk3NSwtNy42Mjc1YzAsLTAuNjcwOTQgMC4wNzA2MywtMS4yMTgyOCAwLjI4MjUsLTEuNTUzNzVjMC4yMTE4OCwtMC4zMTc4MSAwLjQ0MTQxLC0wLjQ5NDM3IDAuODQ3NSwtMC41NjVjMC40MDYwOSwtMC4wNzA2MyAwLjg2NTE2LC0wLjA3MDYzIDEuMjcxMjUsMGMwLjQwNjA5LDAuMDcwNjMgMC44ODI4MSwwLjIxMTg4IDEuNTUzNzUsMC4yODI1YzAuNjcwOTQsMC4wNzA2MyAxLjMwNjU2LDAgMS44MzYyNSwwYzEuMjAwNjMsMCAyLjk0ODU5LDAuMjI5NTMgNS4yMjYyNSwwLjU2NWMyLjI3NzY2LDAuMzM1NDcgMy44NjY3MiwwLjQyMzc1IDQuOTQzNzUsMC40MjM3NWM0LjE0OTIyLDAgMTIuNTg4OTEsLTIuMzMwNjIgMjUuNDI1LC03LjIwMzc1YzEyLjgzNjA5LC00Ljg3MzEzIDE5LjM1MTI1LC04Ljc3NTE2IDE5LjM1MTI1LC0xMS40NDEyNWMwLC0xLjYwNjcyIC0xLjM0MTg3LC0yLjcxOTA2IC0zLjgxMzc1LC0zLjM5Yy0yLjQ3MTg4LC0wLjY3MDk0IC00LjY0MzU5LC0wLjk4ODc1IC02Ljc4LC0wLjk4ODc1Yy0xLjg3MTU2LDAgLTQuNzMxODgsMC41NDczNCAtOC40NzUsMS41NTM3NWMtMy43NDMxMiwxLjAwNjQxIC03Ljg3NDY5LDIuMTM2NDEgLTEyLjI4ODc1LDMuNTMxMjVjLTQuNDE0MDYsMS4zOTQ4NCAtNy4yOTIwMywyLjQxODkxIC04Ljc1NzUsMi44MjVjMC41Mjk2OSwtMi42NjYwOSAwLjg0NzUsLTQuODkwNzggMC44NDc1LC02LjQ5NzVjMCwtNi4yODU2MiAtMS43NDc5NywtMTMuNTQyMzQgLTUuMDg1LC0yMS44OTM3NWMtMy4zMzcwMywtOC4zNTE0MSAtNy4xNjg0NCwtMTQuNjM3MDMgLTExLjU4MjUsLTE4LjY0NWMtMy42MDE4OCwtMy4yMTM0NCAtOC41Mjc5NywtNS4yOTY4OCAtMTQuNTQ4NzUsLTYuNDk3NWMtMy43NDMxMywtNC44MjAxNiAtOS41Njk2OSwtOS4xOTg5MSAtMTcuNTE1LC0xMy4xMzYyNWMtNy45NDUzMSwtMy45MzczNCAtMTQuOTAxODgsLTUuOTMyNSAtMjEuMDQ2MjUsLTUuOTMyNWMtMS4yMDA2MywwIC0zLjAzNjg3LDAuMjQ3MTkgLTUuNTA4NzUsMC43MDYyNWMtMi40NzE4NywwLjQ1OTA2IC00LjEzMTU2LDAuNzA2MjUgLTQuODAyNSwwLjg0NzVsLTQuMzc4NzUsNi4yMTVsMS4xMywwLjI4MjVjMC45MzU3OCwwIDIuNDM2NTYsLTAuMTU4OTEgNC4zNzg3NSwtMC40MjM3NWMxLjk0MjE5LC0wLjI2NDg0IDMuNDQyOTcsLTAuNDIzNzUgNC4zNzg3NSwtMC40MjM3NWM0LjUzNzY2LDAgOS42NTc5NywwLjk1MzQ0IDE1LjUzNzUsMi44MjVjLTMuNzQzMTMsMS44NzE1NiAtNi45Mzg5MSwzLjE0MjgxIC05Ljc0NjI1LDMuODEzNzVjLTAuMjY0ODQsMC4xNDEyNSAtMS4yMTgyOCwwLjIyOTUzIC0yLjY4Mzc1LDAuNDIzNzVjLTEuNDY1NDcsMC4xOTQyMiAtMi42NjYwOSwwLjUxMjAzIC0zLjY3MjUsMC43MDYyNWMtMS4wMDY0MSwwLjE5NDIyIC0xLjk1OTg0LDAuNTI5NjkgLTIuODI1LDEuMTNjLTAuODY1MTYsMC42MDAzMSAtMS4yNzEyNSwxLjMyNDIyIC0xLjI3MTI1LDIuMjZjNy40ODYyNSwtMC43OTQ1MyAxMy4wNjU2MiwtMS4xMyAxNi44MDg3NSwtMS4xM2M1LjA4NSwwIDkuMDc1MzEsMC40NzY3MiAxMi4wMDYyNSwxLjQxMjVjLTEwLjI5MzU5LDEuMjAwNjIgLTE4LjE4NTk0LDQuNzE0MjIgLTIzLjczLDEwLjU5Mzc1Yy01LjU0NDA2LDUuODc5NTMgLTguMzMzNzUsMTQuMDAxNDEgLTguMzMzNzUsMjQuMjk1YzAsMy42MDE4OCAwLjMxNzgxLDYuOTU2NTYgMC44NDc1LDEwLjAyODc1YzIuNTQyNSwxNi4wMzE4OCA3LjMyNzM0LDM5LjkzODQ0IDE0LjU0ODc1LDcxLjc1NWMzLjE5NTc4LDE0LjkzNzE5IDQuMjAyMTksMTkuNDkyNSA1LjM2NzUsMjQuNzE4NzVjLTM2LjA3MTcyLC0xMy40MzY0MSAtNjEuNzI2MjUsLTQ4LjE4MzkxIC02MS43MjYyNSwtODguOTg3NWMwLC01Mi40NzQzNyA0Mi40NDU2MiwtOTQuOTIgOTQuOTIsLTk0Ljkyek0xMjUuNTcxMjUsNzguODE3NWMzLjMzNzAzLDAgNS43MjA2MiwxLjQzMDE2IDcuMDYyNSw0LjM3ODc1Yy0yLjY2NjA5LC0xLjM0MTg4IC00Ljg5MDc4LC0xLjk3NzUgLTYuNjM4NzUsLTEuOTc3NWMtMy44NjY3MiwwIC02LjI2Nzk3LDAuODEyMTkgLTcuMzQ1LDIuNTQyNWMwLjUyOTY5LC0zLjMzNzAzIDIuNzg5NjksLTQuOTQzNzUgNi45MjEyNSwtNC45NDM3NXpNNzkuOTQ3NSw4MS4yMTg3NWMyLjU0MjUsMCA0LjQ0OTM4LDAuOTM1NzggNS43OTEyNSwyLjY4Mzc1Yy0xLjYwNjcyLC0wLjY3MDk0IC0yLjg5NTYzLC0xLjEzIC0zLjk1NSwtMS4xM2MtMi4yNzc2NiwwIC00LjgwMjUsMC43OTQ1MyAtNy4zNDUsMi40MDEyNWMtMi41NDI1LDEuNjA2NzIgLTMuNjU0ODQsMy41MTM1OSAtMy41MzEyNSw1LjY1Yy0wLjQwNjA5LC0wLjc5NDUzIC0wLjU2NSwtMS42MDY3MiAtMC41NjUsLTIuNDAxMjVjMCwtMi4yNzc2NiAxLjAyNDA2LC0zLjk1NSAzLjEwNzUsLTUuMjI2MjVjMi4wNjU3OCwtMS4yNzEyNSA0LjIxOTg0LC0xLjk3NzUgNi40OTc1LC0xLjk3NzV6TTEyOS4xMDI1LDkzLjY0ODc1YzEuNjA2NzIsMCAyLjk2NjI1LDAuNTY1IDQuMDk2MjUsMS42OTVjMS4xMywxLjEzIDEuNjk1LDIuNDg5NTMgMS42OTUsNC4wOTYyNWMwLDEuNDY1NDcgLTAuNTY1LDIuODk1NjIgLTEuNjk1LDQuMDk2MjVjLTEuMTMsMS4yMDA2MiAtMi40ODk1MywxLjY5NSAtNC4wOTYyNSwxLjY5NWMtMS40NjU0NywwIC0yLjg5NTYzLC0wLjQ5NDM4IC00LjA5NjI1LC0xLjY5NWMtMS4yMDA2MywtMS4yMDA2MyAtMS44MzYyNSwtMi42MzA3OCAtMS44MzYyNSwtNC4wOTYyNWMwLC0xLjYwNjcyIDAuNjM1NjMsLTIuOTY2MjUgMS44MzYyNSwtNC4wOTYyNWMxLjIwMDYyLC0xLjEzIDIuNjMwNzgsLTEuNjk1IDQuMDk2MjUsLTEuNjk1ek0xMzEuNjQ1LDk2LjA1Yy0wLjkzNTc4LDAgLTEuNDEyNSwwLjQ3NjcyIC0xLjQxMjUsMS40MTI1YzAsMS4wNzcwMyAwLjQ3NjcyLDEuNTUzNzUgMS40MTI1LDEuNTUzNzVjMS4wNzcwMywwIDEuNTUzNzUsLTAuNDc2NzIgMS41NTM3NSwtMS41NTM3NWMwLC0wLjkzNTc4IC0wLjQ3NjcyLC0xLjQxMjUgLTEuNTUzNzUsLTEuNDEyNXpNODMuNzYxMjUsOTYuNjE1YzEuNzMwMzEsMCAzLjI2NjQxLDAuNzA2MjUgNC42NjEyNSwyLjExODc1YzEuMzk0ODQsMS40MTI1IDIuMTE4NzUsMy4wNzIxOSAyLjExODc1LDQuODAyNWMwLDEuNzMwMzEgLTAuNzIzOTEsMy4yNjY0MSAtMi4xMTg3NSw0LjY2MTI1Yy0xLjM5NDg0LDEuMzk0ODQgLTIuOTMwOTQsMi4xMTg3NSAtNC42NjEyNSwyLjExODc1Yy0xLjczMDMxLDAgLTMuNDA3NjYsLTAuNzA2MjUgLTQuODAyNSwtMi4xMTg3NWMtMS4zOTQ4NCwtMS40MTI1IC0xLjk3NzUsLTIuOTMwOTQgLTEuOTc3NSwtNC42NjEyNWMwLC0xLjczMDMxIDAuNTY1LC0zLjQwNzY2IDEuOTc3NSwtNC44MDI1YzEuNDEyNSwtMS4zOTQ4NCAzLjA3MjE5LC0yLjExODc1IDQuODAyNSwtMi4xMTg3NXpNODYuNzI3NSw5OS40NGMtMS4yMDA2MywwIC0xLjgzNjI1LDAuNjM1NjIgLTEuODM2MjUsMS44MzYyNWMwLDEuMDc3MDMgMC42MzU2MywxLjU1Mzc1IDEuODM2MjUsMS41NTM3NWMxLjIwMDYzLDAgMS44MzYyNSwtMC40NzY3MiAxLjgzNjI1LC0xLjU1Mzc1YzAsLTEuMjAwNjMgLTAuNjM1NjIsLTEuODM2MjUgLTEuODM2MjUsLTEuODM2MjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
    const code = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"/></svg>
    const terminal = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"/></svg>
    const figma = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M277 170.7A85.35 85.35 0 0 0 277 0H106.3a85.3 85.3 0 0 0 0 170.6 85.35 85.35 0 0 0 0 170.7 85.35 85.35 0 1 0 85.3 85.4v-256zm0 0a85.3 85.3 0 1 0 85.3 85.3 85.31 85.31 0 0 0-85.3-85.3z"/></svg>

    return (
        <span>
            <UsesItem icon={windows} title='PC OS' name='Windows 10' text="Windows is ok, I would install Linux but I don't want to bust anything." />
            <UsesItem icon={android} title='Mobile OS' name='Android 10' text="As someone who has used both IOS and Android, Android is wayyy better, and it's open source." />
            <UsesItem icon={firefox} title='Web Browser' name='Firefox' text="Firefox is hands down the best browser out there in terms of privacy, features, and dev tools. It's also open source."/>
            <UsesItem icon={duckduckgo} title='Search Engine' name='Duck Duck Go' text="I use Duck Duck Go because I value my privacy and the simplicity of the search engine is very nice."/>
            <UsesItem icon={code} title='Code Editor' name='Visual Studio Code' text="My favorite coding environment. VSCode has lots of cool features and many extentions, themes, and icon packs to install."/>
            <UsesItem icon={terminal} title='Terminal' name='Hyper' text="Hyper is a sleek, fast terminal built on web technologies."/>
            <UsesItem icon={figma} title="Design Tool" name='Figma' text="Figma is a design tool I use for web design. It's great for teams and has a lot of cool features that aren't in other design tools."/>
        </span>
    )
};

export default SoftWareList;