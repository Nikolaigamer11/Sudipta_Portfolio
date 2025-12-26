@echo off
setlocal enabledelayedexpansion

REM Get the BAT file name without extension
set baseName=%~n0

set count=1


for %%f in (*.jpg *.png *.jpeg *.webp) do (    REM Skip renaming the BAT file itself
    if /I not "%%~nx0"=="%%~nxf" (
        ren "%%f" "%baseName%_!count!%%~xf"
        set /a count+=1
    )
)

echo Done!
pause
