package strings

import (
	"errors"
	"strings"
)

func FindLongest(s *string) error {

	if s == nil {
		return errors.New("empty string")
	}

	longestWord := ""
	longestLength := 0
	sentences := strings.Split(*s, " ")

	for _, sentence := range sentences {
		if len(sentence) > longestLength {
			longestWord = sentence
			longestLength = len(sentence)
		}
	}

	*s = longestWord
	return nil

}
