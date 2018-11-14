using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using DomainModel.Interfaces;
using DomainModel.Classes;

namespace SAPI_CatenaBeta.Controllers
{
    [Route("api/Xr33Api")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [ApiController]
    public class Xr33ApiController : ControllerBase
    {
        private readonly IXr33Repository _xr33Repository;

        public Xr33ApiController(IXr33Repository xr33Repository)
        {
            _xr33Repository = xr33Repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Xr33Item>> Get()
        {
            var tmp = await _xr33Repository.GetAllEntries();
            return tmp;
        }

        // GET api/notes/5 - retrieves a specific note using either Id or InternalId (BSonId)
        [HttpGet("{id}")]
        public async Task<Xr33Item> GetXr33(string id)
        {
            return await _xr33Repository.GetXr33(id) ?? new Xr33Item();
        }

        //[HttpGet("GetXr33percodice/{id}")]

        //public async Task<Xr33Item> GetXr33percodice(string id)
        //{
        //  return await _xr33Repository.GetXr33(id) ?? new Xr33Item();
        //}



        // GET api/notes/text/date/size
        // ex: http://localhost:53617/api/notes/Test/2018-01-01/10000


        [HttpGet(template: "{bodyText}/{updatedFrom}/{headerSizeLimit}")]
        public async Task<IEnumerable<Xr33Item>> GetXr33ByFilter(string id, string regione, string provincia)
        {
            return await _xr33Repository.GetXr33ByFilter(id, regione, provincia)
                        ?? new List<Xr33Item>();
        }

        // POST api/notes - creates a new note
        [HttpPost]
        public void Post([FromBody] Xr33Item newXr33)
        {
            _xr33Repository.InserisciXr33(new Xr33Item
            {
                id = newXr33.id,
                regione = newXr33.regione,
                provincia = newXr33.provincia
            });
        }

        // PUT api/notes/5 - updates a specific note

        [HttpPut("{id}")]
        public void Put(string id, [FromBody]Xr33Item xr33Upd)
        {
            _xr33Repository.AggiornaXr33(xr33Upd);
        }

        // DELETE api/notes/5 - deletes a specific note

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _xr33Repository.EliminaXr33(id);
        }

    }

}
