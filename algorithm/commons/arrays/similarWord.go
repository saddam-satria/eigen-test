package arrays

func SimilarWord(inputs []any, queries []any, res *[]int) error {
	similarDict := make(map[any]int)
	result := []int{}

	for _, input := range inputs {
		_, ok := similarDict[input]

		if ok {
			similarDict[input] += 1
		} else {
			similarDict[input] = 1
		}
	}

	for _, query := range queries {
		_, ok := similarDict[query]
		if ok {
			result = append(result, similarDict[query])
		} else {
			result = append(result, 0)
		}
	}

	*res = result
	return nil
}
