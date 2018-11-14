using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DomainModel.Classes
{
    public class Xr33Item
    {
        [BsonId]
        public ObjectId _id { get; set; }
        public string id { get; set; }
        public string regione { get; set; }
        public string provincia { get; set; }
    }
}
