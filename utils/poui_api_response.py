import json

def Erro(message="",code=400,detailedMessage="",details=[]):
  return {
    "code": code,
    "message": message,
    "detailedMessage": detailedMessage,
    "details": details 
  }

def Lista(items=[], hasNext=False):
  return {
    "items": items,
    "hasNext": hasNext
  }


def Menssages(itens=None,menssages=[]):
  return {
    **itens,
    "_messages": menssages
  }


def Menssage(message="",type="success" or "error" or "warning" or "information",code=200,detailedMessage=""):
  return {
    "code": code,
    "type": type,
    "message": message,
    "detailedMessage": detailedMessage
  }