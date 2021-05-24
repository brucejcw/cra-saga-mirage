export const Result = {
  Success: (data: any) => {
    return {
      success: true,
      data,
    }
  },
}

export function combineRoutes(server: any, ...arr: any) {
  arr.map((r: any) => {
    r.route && r.route(server)
  })
}

export function runAllSeeds(server: any, ...arr: any) {
  arr.map((r: any) => {
    r.seed && r.seed(server)
  })
}
