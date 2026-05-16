package core

type SerialifColorError struct {
	IsSerialifColorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSerialifColorError(code string, msg string, ctx *Context) *SerialifColorError {
	return &SerialifColorError{
		IsSerialifColorError: true,
		Sdk:              "SerialifColor",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SerialifColorError) Error() string {
	return e.Msg
}
