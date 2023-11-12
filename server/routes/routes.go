package routes

import (
	"fmt"
	"net/http"
	"website/server/handlers"

	"github.com/go-chi/chi/v5"
)

func RegisterRoutes(server *http.Server, hndlers handlers.HandlerSet) {
	mux := chi.NewRouter()

	mux.Use(func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			fmt.Println("Middleware applied")
			h.ServeHTTP(w, r)
		})
	})

	mux.Route("/v1", func(r chi.Router) {
		r.Method(http.MethodGet, "/info", hndlers.GetAPIInfo)
	})

	server.Handler = mux
}
