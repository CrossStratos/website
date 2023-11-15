package httpserver

import (
	"log/slog"
	"net/http"
	"time"
	"website/server/http/handlers"
	"website/server/http/routes"
)

type HTTTPServerConfig struct {
	Addr    string
	Logger  *slog.Logger
	Hndlers handlers.HandlerSet
}

func NewHTTPServer(c HTTTPServerConfig) *http.Server {
	srvr := &http.Server{
		Addr:              c.Addr,
		ReadTimeout:       5 * time.Second,
		ReadHeaderTimeout: 3 * time.Second,
		WriteTimeout:      5 * time.Second,
	}

	srvr.Handler = nil
	routes.RegisterRoutes(srvr, c.Hndlers)

	return srvr
}
