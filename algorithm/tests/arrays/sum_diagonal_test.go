package arrays

import (
	"fmt"
	"testing"

	"github.com/saddam-satria/eigen-test/commons/arrays"
)

func TestSumDiagonal(t *testing.T) {
	var result int
	const expected = 3
	if err := arrays.SumDiagonal([][]int{{1, 2, 0}, {4, 5, 6}, {7, 8, 9}}, &result); err != nil {
		t.Fatalf(err.Error())
	}

	if expected != result {
		t.Fatalf(fmt.Sprintf("the result should be %d", expected))
	}

}
