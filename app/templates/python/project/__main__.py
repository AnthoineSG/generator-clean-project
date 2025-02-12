from sys import exit

from .index import init


def main() -> int:
	print('🚀 ~ Start')

	init()

	print('🚀 ~ END')
	return 0


if __name__ == '__main__':
	exit(main())
