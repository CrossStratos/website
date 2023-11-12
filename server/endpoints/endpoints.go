package endpoints

import (
	"context"
	"fmt"
	"website/services/coreapi"
)

type Endpoint func(ctx context.Context, req interface{}) (interface{}, error)

type EndpointSet struct {
	GetAPIInfo Endpoint
}

func NewEndpointSet(svc coreapi.CoreApiService) EndpointSet {
	getApiInfoEndpoint := makeGetAPIInfoEndpoint(svc)

	return EndpointSet{
		GetAPIInfo: getApiInfoEndpoint,
	}
}

func panicMiddleware(e Endpoint) Endpoint {
	return func(ctx context.Context, req interface{}) (resp interface{}, err error) {
		defer func() {
			if r := recover(); r != nil {
				fmt.Println("Recovered from panic:\n", r)
				err = fmt.Errorf("panic occurred")
			}
		}()

		return e(ctx, req)
	}
}

type GetAPIInfoEndpointResponse struct {
	Info map[string]interface{} `json:"info"`
}

func makeGetAPIInfoEndpoint(svc coreapi.CoreApiService) Endpoint {
	return panicMiddleware(func(ctx context.Context, req interface{}) (interface{}, error) {
		return &GetAPIInfoEndpointResponse{
			Info: svc.GetAPIInfo(),
		}, nil
	})
}
