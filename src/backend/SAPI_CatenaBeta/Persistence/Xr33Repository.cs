using DomainModel.Classes;
using DomainModel.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace Persistence
{
    public class Xr33Repository : IXr33Repository
    {
        private readonly DBContext _context = null;

        public Xr33Repository(IOptions<Settings> settings)
        {
            _context = new DBContext(settings);
        }

        public async Task<IEnumerable<Xr33Item>> GetAllEntries()
        {
            try
            {
                return await _context.Xr33Items
                        .Find(_ => true).ToListAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        // query after Id or InternalId (BSonId value)
        //
        public async Task<Xr33Item> GetXr33(string id)
        {
            try
            {
                return await _context.Xr33Items
                                .Find(xr33 => xr33.id == id)
                                .FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        // query after body text, updated time, and header image size
        //
        public async Task<IEnumerable<Xr33Item>> GetXr33ByFilter(string id, string regione, string provincia)
        {
            try
            {
                var query = _context.Xr33Items.Find(xr33 => xr33.regione.Contains(regione) &&
                                       xr33.provincia.Contains(provincia) &&
                                       xr33.id.Contains(id));

                return await query.ToListAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task InserisciXr33(Xr33Item item)
        {
            try
            {
                await _context.Xr33Items.InsertOneAsync(item);
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<bool> EliminaXr33(string id)
        {
            try
            {
                DeleteResult actionResult
                    = await _context.Xr33Items.DeleteOneAsync(
                        Builders<Xr33Item>.Filter.Eq("Id", id));

                return actionResult.IsAcknowledged
                    && actionResult.DeletedCount > 0;
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<bool> AggiornaXr33(Xr33Item item)
        {
            var filter = Builders<Xr33Item>.Filter.Eq(s => s.id, item.id);
            var update = Builders<Xr33Item>.Update
                            .Set(s => s, item);

            try
            {
                UpdateResult actionResult
                    = await _context.Xr33Items.UpdateOneAsync(filter, update);

                return actionResult.IsAcknowledged
                    && actionResult.ModifiedCount > 0;
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }
    }
}
