package main

import (
	"log/slog"
	"os"
	"website/server/endpoints"
	httpserver "website/server/http"
	"website/server/http/handlers"
	"website/services/coreapi"
)

var (
	Version    = "dev"
	CommitHash = "n/a"
	BuildTime  = "n/a"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
		AddSource: false,
	}))

	logger.Info("Initializing server.")

	coreSvc := coreapi.NewApiService(coreapi.CoreAPIServiceConfig{
		Version: Version,
		Commit:  CommitHash,
		Build:   BuildTime,
	})

	eps := endpoints.NewEndpointSet(coreSvc)
	hndlers := handlers.NewHandlerSet(eps)

	httpServer := httpserver.NewHTTPServer(httpserver.HTTTPServerConfig{
		Addr:    ":443",
		Logger:  logger,
		Hndlers: hndlers,
	})

	err := httpServer.ListenAndServeTLS("certs/website.crt", "certs/website.key")
	logger.Warn("Server exited.", err)
}
