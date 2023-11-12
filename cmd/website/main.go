package main

import (
	"log/slog"
	"os"
	"website/server"
	"website/server/endpoints"
	"website/server/handlers"
	"website/services/coreapi"
)

const bindAddress = "localhost:1234"

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

	httpServer := server.NewHTTPServer(server.HTTTPServerConfig{
		Addr:    bindAddress,
		Logger:  logger,
		Hndlers: hndlers,
	})
	err := httpServer.ListenAndServe()
	logger.Warn("Server exited.", err)

	return
}
