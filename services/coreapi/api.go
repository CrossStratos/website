// Package coreapi provides "core" API functionality.
package coreapi

import "runtime"

type CoreApiService interface {
	GetAPIInfo() map[string]interface{}
}

type coreApiServiceImpl struct {
	buildInfo map[string]interface{}
}

type CoreAPIServiceConfig struct {
	Version string
	Build   string
	Commit  string
}

func NewApiService(c CoreAPIServiceConfig) CoreApiService {
	return coreApiServiceImpl{
		buildInfo: map[string]interface{}{
			"version":  c.Version,
			"build":    c.Build,
			"commit":   c.Commit,
			"compiler": runtime.Version(),
		},
	}
}

func (c coreApiServiceImpl) GetAPIInfo() map[string]interface{} {
	return c.buildInfo
}
