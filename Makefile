#===============================================================================
# Main section                                                                 =
#===============================================================================

init: ## Initialise the project requirements and dependencies
	nodeenv .nodeenv --node=20.3.0 --prebuilt --force
	source .nodeenv/bin/activate && \
	npm install -g yarn && \
	yarn install


#===============================================================================
# Helper section (do not touch!)                                               =
#===============================================================================
run-with-trap:
	# This function is used to trap the interrupt and run a final make command
	# before closing the application. This is great for docker compose commands
	# where you are in daemon mode and following specific logs.
	@bash -c "trap '${MAKE} ${INTERRUPT_TARGET}' EXIT; ${MAKE} ${MAIN_TARGET}"

.PHONY: help

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
