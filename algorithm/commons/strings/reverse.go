package strings

import (
	"errors"
	"regexp"
)

func Reverse(s string, result chan string) {

	charStr := ""
	stringRegex := regexp.MustCompile(`\d`)
	for i := len(s) - 1; i >= 0; i-- {
		if !stringRegex.MatchString(string(s[i])) {
			charStr += string(s[i])
		}
	}
	result <- charStr
}

func Digit(str string, result chan string) {
	digitChar := ""
	stringRegex := regexp.MustCompile(`\d`)
	for _, s := range str {
		if stringRegex.MatchString(string(s)) {
			digitChar += string(s)
		}
	}

	result <- digitChar
}

func ReverseString(s *string) error {
	if s == nil {
		return errors.New("empty string")
	}

	reverseChan := make(chan string)
	digitChan := make(chan string)

	go Digit(*s, digitChan)
	go Reverse(*s, reverseChan)

	digitString := <-digitChan
	newString := <-reverseChan

	*s = newString + digitString
	return nil
}
