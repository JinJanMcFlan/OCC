@echo off
setlocal
cd /d "%~dp0..\apps\occ-desktop"
call npm run start
endlocal
