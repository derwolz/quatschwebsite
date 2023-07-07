folder="/venv"
if exist $folder (
	call "python -m venv venv"
	call "./venv/scripts/activate.bat"
	call "cd QuatschDjango"
	
	call "cd .."
)

start cmd /k "cd ./frontend/ && npm run start"
call "pip install -r requirements.txt"
call ./venv/scripts/activate.bat
start cmd /k "cd ./QuatschDjango && python manage.py runserver 8000"