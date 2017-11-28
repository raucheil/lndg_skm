@echo off
setlocal
set orig=C:\Users\Daniele\Desktop\rename\b2c_prof\rename
set dest=C:\Users\Daniele\Desktop\landing_valentino\img\items
echo %dest%
cd C:\Users\Daniele\Desktop\landing_valentino\import_items
for /F "tokens=1-2 delims=," %%G in (list.csv) do (
echo "%orig%\%%G"
echo "%dest%\%%H"
copy "%orig%\%%G*" "%dest%\"
)
