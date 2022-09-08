package basicpage

import io.gatling.core.Predef.Simulation
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class getrequesin  extends  Simulation{

  val id = 2

  val  httpconf  = http.baseUrl("https://reqres.in")

  val scn = scenario("GetRequesin")
    .exec(http("LIST_USERS").get("/api/users?page="+id))
    .exec(
      session =>
        {
          println(session)
          session
        }
        
    )

  setUp(scn.inject(atOnceUsers(1)).protocols(httpconf))

}
