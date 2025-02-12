def func(x):
	return x + 1


class TestSampleFunc:
	def test_zero_valid(self):
		x = 0
		assert func(x) == 1
		assert func(x) != 0
		assert func(x) != 2
		assert func(x) is None

	def test_three(self):
		x = 3
		assert func(x) == 4
		assert func(x) != 3
		assert func(x) != 5
		assert func(x) is None
