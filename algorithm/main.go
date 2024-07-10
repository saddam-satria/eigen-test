package main

import (
	"fmt"

	"github.com/saddam-satria/eigen-test/commons/arrays"
	"github.com/saddam-satria/eigen-test/commons/strings"
)

func ReverseString(result string) string {

	if err := strings.ReverseString(&result); err != nil {
		panic(err)
	}

	return result
}

func FindLongestString(result string) string {

	if err := strings.FindLongest(&result); err != nil {
		panic(err)
	}

	return result
}

func SimilarWord(in []any, out []any) []int {

	var results []int
	if err := arrays.SimilarWord(in, out, &results); err != nil {
		panic(err)
	}

	return results
}

func SumDiagonal(matrix [][]int) int {
	var result int
	if err := arrays.SumDiagonal(matrix, &result); err != nil {
		panic(err)
	}

	return result
}

func main() {
	fmt.Println(ReverseString("NEGIE1"))
	fmt.Println(FindLongestString("Saya sangat senang mengerjakan soal algoritma"))
	fmt.Println(SimilarWord([]any{"xc", "dz", "bbb", "dz"}, []any{"bbb", "ac", "dz"}))
	fmt.Println(SumDiagonal([][]int{{1, 2, 0}, {4, 5, 6}, {7, 8, 9}}))
}
