package strings

import (
	"testing"

	"github.com/saddam-satria/eigen-test/commons/strings"
)

func TestReverseString(t *testing.T) {
	result := "NEGIE1"
	expected := "EIGEN1"
	if err := strings.ReverseString(&result); err != nil {
		t.Fatalf(err.Error())
	}

	if result != expected {
		t.Fatalf("should return %s, got %s", expected, result)
	}

}
