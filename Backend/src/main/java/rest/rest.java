package rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONArray;
import org.json.JSONObject;

@Path("/data")
public class rest {

	@POST
	@Path("/{path}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addData(@PathParam("path") String path, String json) {
		JSONArray aJson = new JSONArray(json);
		System.out.println(aJson);
		return Response.ok().build();
	}
}