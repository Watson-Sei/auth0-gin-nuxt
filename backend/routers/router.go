package routers

import (
	"time"

	"github.com/Watson-Sei/auth0-gin-nuxt/backend/middleware"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	// CORS for http://localhost:8080 origins, allowing:
	// - Preflight requests cached for 12 hours
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Content-Type", "Origin", "Accept", "*"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "http://localhost:3000"
		},
		MaxAge: 12 * time.Hour,
	}))

	router.GET("/public", func(g *gin.Context) {
		g.JSON(200, gin.H{"text": "Hello from public"})
	})

	router.GET("/private", middleware.CheckJWT(), func(g *gin.Context) {
		g.JSON(200, gin.H{"text": "Hello from private"})
	})

	return router
}
