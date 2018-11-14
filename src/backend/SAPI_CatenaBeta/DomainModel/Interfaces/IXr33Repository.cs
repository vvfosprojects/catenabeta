using DomainModel.Classes;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Interfaces
{
    public interface IXr33Repository
    {
        Task<IEnumerable<Xr33Item>> GetAllEntries();
        Task<Xr33Item> GetXr33(string id);

        // query after multiple parameters
        Task<IEnumerable<Xr33Item>> GetXr33ByFilter(string id, string Regione, string Provincia);

        // add new note document
        Task InserisciXr33(Xr33Item item);

        // remove a single document / note
        Task<bool> EliminaXr33(string id);

        // update just a single document / note
        Task<bool> AggiornaXr33(Xr33Item item);

    }
}
