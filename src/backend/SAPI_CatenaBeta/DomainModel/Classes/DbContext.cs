using Microsoft.Extensions.Options;
using MongoDB.Driver;


namespace DomainModel.Classes
{
    public class DBContext
    {

        private readonly IMongoDatabase _database = null;
        public DBContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
                _database = client.GetDatabase(settings.Value.Database);
        }
        public IMongoCollection<Xr33Item> Xr33Items
        {
            get
            {
                return _database.GetCollection<Xr33Item>("Xr33Items");
            }
        }
    }
}
