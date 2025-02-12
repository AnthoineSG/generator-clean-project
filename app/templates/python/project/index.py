
import os

common_text = ".env works ? =>"

def check_env() -> None:
	init = os.getenv('INIT_ENV')
	if init:
		return print(f'{common_text} {init}')
	else:
		return print(f'{common_text} Env do not work :(')

def init() -> None:
		check_env()
