package strings

import (
	"testing"

	"github.com/saddam-satria/eigen-test/commons/strings"
)

func TestFindLongest(t *testing.T) {
	result := "Saya sangat senang mengerjakan soal algoritma"
	expected := "mengerjakan"
	if err := strings.FindLongest(&result); err != nil {
		t.Fatalf(err.Error())
	}

	if result != expected {
		t.Fatalf("should return %s, got %s", expected, result)
	}

}
