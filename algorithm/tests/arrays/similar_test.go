package arrays

import (
	"encoding/json"
	"testing"

	"github.com/saddam-satria/eigen-test/commons/arrays"
)

func TestSimilarWord(t *testing.T) {

	var results []int

	expected, _ := json.Marshal([]int{1, 0, 2})

	if err := arrays.SimilarWord([]any{"xc", "dz", "bbb", "dz"}, []any{"bbb", "ac", "dz"}, &results); err != nil {
		t.Fatalf(err.Error())
	}

	convertedResult, ok := json.Marshal(results)

	if ok != nil {
		t.Fatalf("failed to encode")
	}

	if string(convertedResult) != string(expected) {
		t.Fatalf("should return 1,0,2")
	}

}
