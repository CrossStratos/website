package handlers

import (
	"encoding/json"
	"net/http"
	"website/server/endpoints"
)

// HandlerSet -.
type HandlerSet struct {
	GetAPIInfo http.Handler
}

// Deserializer -.
type Deserializer interface {
	Decode(r *http.Request) (interface{}, error)
}

// Serializer -.
type Serializer interface {
	Encode(w http.ResponseWriter, resp interface{}, err error)
}

type handler struct {
	deserializer Deserializer
	serializer   Serializer
	endpoint     endpoints.Endpoint
}

func (h handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if h.deserializer == nil {
		panic("development time error, deserializer not set.")
	}

	// If no serializer is set, default to generic.
	if h.serializer == nil {
		h.serializer = EncoderFunc(httpGenericEncoder)
	}

	req, err := h.deserializer.Decode(r)
	if err != nil {
		panic(err)
	}

	resp, err := h.endpoint(r.Context(), req)
	h.serializer.Encode(w, resp, err)
}

// The DecoderFunc type is an adapter to allow the use of
// ordinary functions as HTTP decoders. If d is a function
// with the appropriate signature, DecoderFunc(d) is a
// Decoder that calls d.
type DecoderFunc func(r *http.Request) (interface{}, error)

func (d DecoderFunc) Decode(r *http.Request) (interface{}, error) { return d(r) }

// The EncoderFunc type is an adapter to allow the use of
// ordinary functions as HTTP encoders. If e is a function
// with the appropriate signature, EncoderFunc(e) is a
// Encoder that calls e.
type EncoderFunc func(w http.ResponseWriter, resp interface{}, err error)

func (e EncoderFunc) Encode(w http.ResponseWriter, resp interface{}, err error) {
	e(w, resp, err)
}

func NewHandlerSet(eps endpoints.EndpointSet) HandlerSet {
	encoder := EncoderFunc(httpGenericEncoder)

	return HandlerSet{
		GetAPIInfo: handler{
			deserializer: DecoderFunc(httpDecodeGetAPIInfo),
			serializer:   encoder,
			endpoint:     eps.GetAPIInfo,
		},
	}
}

func httpDecodeGetAPIInfo(r *http.Request) (interface{}, error) {
	return nil, nil
}

func errorEncoder(err error) int {
	if err == nil {
		return 0
	}

	return http.StatusBadRequest
}

func httpGenericEncoder(w http.ResponseWriter, resp interface{}, err error) {
	w.Header().Set("Content-type", "application/json; charset=utf8")

	statusCode := http.StatusOK
	if errorCode := errorEncoder(err); errorCode != 0 {
		statusCode = errorCode
		resp = map[string]interface{}{
			"message": err.Error(),
		}
	}

	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(resp)
}
