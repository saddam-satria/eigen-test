package arrays

func SumDiagonal(matrix [][]int, result *int) error {

	leftDiagonal := 0
	rightDiagonal := 0
	for rowIndex := range matrix {
		for colIndex := range matrix {

			if rowIndex == colIndex {
				leftDiagonal += matrix[rowIndex][colIndex]
			}

			if colIndex == len(matrix)-rowIndex-1 {
				rightDiagonal += matrix[rowIndex][len(matrix)-rowIndex-1]
			}
		}
	}

	*result = leftDiagonal - rightDiagonal
	return nil
}
