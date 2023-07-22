xcopy "I:\html\html\react\doctorImageOCR\build\static\*" I:\html\html\vscode\doctorImageOCR\back\static /c/q/y/s
set new_name=index
echo Please input the new name of the index.html:
set /p new_name=
ren I:\html\html\react\doctorImageOCR\build\index.html %new_name%.html
xcopy I:\html\html\react\doctorImageOCR\build\%new_name%.html I:\html\html\vscode\doctorImageOCR\back\templates /c/q/y/s